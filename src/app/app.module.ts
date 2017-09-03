import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicListComponent } from './component/dynamic-list/dynamic-list.component';
import { SuccessListItemComponent } from './component/success-list-item/success-list-item.component';
import { WarningListItemComponent } from './component/warning-list-item/warning-list-item.component';
import { ErrorListItemComponent } from './component/error-list-item/error-list-item.component';
import { AddDynamicItemDirective } from './directive/add-dynamic-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicListComponent,
    SuccessListItemComponent,
    WarningListItemComponent,
    ErrorListItemComponent,
    AddDynamicItemDirective
  ],
  entryComponents: [ 
    SuccessListItemComponent, 
    WarningListItemComponent,
    ErrorListItemComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
