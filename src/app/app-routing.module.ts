import { Template2Component } from './template-form/template2/template2.component';
import { Template1Component } from './template-form/template1/template1.component';
import { DataFormComponent } from './data-form/data-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'templateForm/template1', component: Template1Component},
  {path: 'templateForm/template2', component: Template2Component},
  {path: 'dataForm', component: DataFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'templateForm/template2' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
