import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';


@NgModule({
  declarations: [
    Template2Component,
    Template1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class TemplateFormModule { }
