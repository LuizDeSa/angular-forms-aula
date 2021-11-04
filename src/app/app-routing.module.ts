import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataForm1Component } from './data-form/data-form1/data-form1.component';
import { Template2Component } from './template-form/template2/template2.component';
import { Template1Component } from './template-form/template1/template1.component';


const routes: Routes = [
  {path: 'templateForm/template1', component: Template1Component},
  {path: 'templateForm/template2', component: Template2Component},
  {path: 'dataForm/data-form1', component: DataForm1Component},
  {path: '', pathMatch: 'full', redirectTo: 'dataForm/data-form1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
