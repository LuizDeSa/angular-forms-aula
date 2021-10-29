import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { Template1Component } from './template1/template1.component';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { Template2Component } from './template2/template2.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';


@NgModule({
  declarations: [
    Template2Component,
    FormDebugComponent,
    Template1Component,
    CampoControlErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TemplateFormModule { }
