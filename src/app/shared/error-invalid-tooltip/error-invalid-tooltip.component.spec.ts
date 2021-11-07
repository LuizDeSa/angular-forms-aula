import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInvalidTooltipComponent } from './error-invalid-tooltip.component';

describe('ErrorInvalidTooltipComponent', () => {
  let component: ErrorInvalidTooltipComponent;
  let fixture: ComponentFixture<ErrorInvalidTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInvalidTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInvalidTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
