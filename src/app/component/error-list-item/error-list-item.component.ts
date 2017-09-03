import { Component, OnInit } from '@angular/core';

import { DynamicListItem } from '../dynamic-list/dynamic-list-item'

@Component({
  selector: 'error-list-item',
  templateUrl: './error-list-item.component.html',
  styleUrls: ['./error-list-item.component.css']
})
export class ErrorListItemComponent implements DynamicListItem, OnInit {

  data: any;

  constructor() { }

  ngOnInit() {
  }

}
