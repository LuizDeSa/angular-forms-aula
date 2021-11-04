import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataForm1Component } from './data-form1/data-form1.component';


@NgModule({
  declarations: [
    DataForm1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class DataFormModule { }
