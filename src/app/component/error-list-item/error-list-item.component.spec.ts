import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorListItemComponent } from './error-list-item.component';

describe('ErrorListItemComponent', () => {
  let component: ErrorListItemComponent;
  let fixture: ComponentFixture<ErrorListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
