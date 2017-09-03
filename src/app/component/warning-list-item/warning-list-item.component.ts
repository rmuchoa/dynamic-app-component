import { Component, OnInit } from '@angular/core';

import { DynamicListItem } from '../dynamic-list/dynamic-list-item'

@Component({
  selector: 'warning-list-item',
  templateUrl: './warning-list-item.component.html',
  styleUrls: ['./warning-list-item.component.css']
})
export class WarningListItemComponent implements DynamicListItem, OnInit {

  data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
