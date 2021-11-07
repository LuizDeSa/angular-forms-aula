import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInvalidFeedbackComponent } from './error-invalid-feedback.component';

describe('ErrorInvalidFeedbackComponent', () => {
  let component: ErrorInvalidFeedbackComponent;
  let fixture: ComponentFixture<ErrorInvalidFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInvalidFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInvalidFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
