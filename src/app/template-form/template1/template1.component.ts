import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  verificarValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicarCssErro(campo: any){

    return {
      'was-validated': this.verificarValidTouched(campo) //, outras classes e condições
    }
  }

}
