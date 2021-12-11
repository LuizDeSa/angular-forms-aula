import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMsg2Component } from './error-msg2.component';

describe('ErrorMsg2Component', () => {
  let component: ErrorMsg2Component;
  let fixture: ComponentFixture<ErrorMsg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMsg2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMsg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
