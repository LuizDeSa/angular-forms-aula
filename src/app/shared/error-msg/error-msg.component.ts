import { FormValidations } from './../form-validations';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  // @Input() mostrarErro!: boolean;
  // @Input() mensagem!: string;
  @Input() label!: string;


  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {

  }

  // é uma PROPRIEDADE ja com seu método get e não apenas uma metódo qualquer
  get errorMessage(){

    if(this.control?.status==='INVALID'){
      for(const propertyName in this.control.errors){
        if(this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched){
          // console.log(this.control);
          // console.log(propertyName);
          return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
      }
    }else if(this.control?.status==='PENDING'){
      return `Valiando ${this.label.toLowerCase()}.`;
    }

    return null;
  }

}
