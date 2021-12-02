import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidTooltipComponent } from './form-valid-tooltip.component';

describe('FormValidTooltipComponent', () => {
  let component: FormValidTooltipComponent;
  let fixture: ComponentFixture<FormValidTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
