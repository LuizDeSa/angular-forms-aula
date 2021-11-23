import { EstadosBrService } from './services/estadosBr.service';
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
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    ErrorInvalidFeedbackComponent,
    ErrorInvalidTooltipComponent
  ],
  providers:[
    EstadosBrService
  ]
})
export class SharedModule { }
