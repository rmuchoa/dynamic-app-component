import { Component, Type } from '@angular/core';

import { SuccessListItemComponent } from './component/success-list-item/success-list-item.component'
import { WarningListItemComponent } from './component/warning-list-item/warning-list-item.component'
import { ErrorListItemComponent } from './component/error-list-item/error-list-item.component'

import { ListItem } from './classes/list-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  item: any;
  listItem: ListItem;
  
  constructor() {
    this.item = { type: null };
  }

  chooseItem() {
    if (this.item.type === 'green') {
      this.listItem = new ListItem();
      this.listItem.type = SuccessListItemComponent;
      this.listItem.data = { message: 'Everything is right!' };
    }
    if (this.item.type === 'orange') {
      this.listItem = new ListItem();
      this.listItem.type = WarningListItemComponent;
      this.listItem.data = { message: 'Caution, something may be wrong.' };
    }
    if (this.item.type === 'red') {
      this.listItem = new ListItem();
      this.listItem.type = ErrorListItemComponent;
      this.listItem.data = { message: 'Danger... Something is very wrong!!!' };
    }
  }

}
