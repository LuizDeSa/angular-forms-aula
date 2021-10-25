import { FormDebugComponent } from './../form-debug/form-debug.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1Component } from './template1/template1.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    Template1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TemplateFormModule { }
