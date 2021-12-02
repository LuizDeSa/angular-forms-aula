import { FormValidTooltipComponent } from './form-valid-tooltip/form-valid-tooltip.component';
import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInvalidFeedbackComponent } from './error-invalid-feedback/error-invalid-feedback.component';
import { ErrorInvalidTooltipComponent } from './error-invalid-tooltip/error-invalid-tooltip.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorInvalidFeedbackComponent,
    ErrorInvalidTooltipComponent,
    FormValidTooltipComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    ErrorInvalidFeedbackComponent,
    ErrorInvalidTooltipComponent,
    FormValidTooltipComponent
  ],
  providers:[
  ]
})
export class SharedModule { }
