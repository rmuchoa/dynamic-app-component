import { Component, OnInit, OnChanges, Input, ViewChild, ComponentFactoryResolver, Type, SimpleChange } from '@angular/core';

import { AddDynamicItemDirective } from '../../directive/add-dynamic-item.directive';
import { DynamicListItem } from './dynamic-list-item';
import { ListItem } from '../../classes/list-item';

@Component({
  selector: 'dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit, OnChanges {

  @Input()
  listItems: Array<ListItem>;
  @Input()
  item: ListItem;

  @ViewChild(AddDynamicItemDirective) addDynamicItem: AddDynamicItemDirective;

  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.listItems = new Array<ListItem>();
  }

  ngOnChanges(changes: {[propertyKey: string]: SimpleChange}) {
    if (!this.listItems) {
      return;
    }

    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      this.listItems.push(changedProperty.currentValue);
    }
    this.loadComponent();
  }

  loadComponent() {
    let viewContainerRef = this.addDynamicItem.viewContainerRef;
    viewContainerRef.clear();

    for (let item of this.listItems) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.type);
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<DynamicListItem>componentRef.instance).data = item.data;
    }
  }

}
