import { Template1Component } from './template-form/template1/template1.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'templateForm/template2', component: TemplateFormComponent},
  {path: 'templateForm/template1', component: Template1Component},
  {path: 'dataForm', component: DataFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'templateForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
