import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[add-dynamic-item]'
})
export class AddDynamicItemDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
