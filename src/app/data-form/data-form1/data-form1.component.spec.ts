import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataForm1Component } from './data-form1.component';

describe('DataForm1Component', () => {
  let component: DataForm1Component;
  let fixture: ComponentFixture<DataForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
