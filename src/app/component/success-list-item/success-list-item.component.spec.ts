import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessListItemComponent } from './success-list-item.component';

describe('SuccessListItemComponent', () => {
  let component: SuccessListItemComponent;
  let fixture: ComponentFixture<SuccessListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
