import { Component, OnInit } from '@angular/core';

import { DynamicListItem } from '../dynamic-list/dynamic-list-item'

@Component({
  selector: 'success-list-item',
  templateUrl: './success-list-item.component.html',
  styleUrls: ['./success-list-item.component.css']
})
export class SuccessListItemComponent implements DynamicListItem, OnInit {

  data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
