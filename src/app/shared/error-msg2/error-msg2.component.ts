import { FormValidations } from './../form-validations';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg2',
  templateUrl: './error-msg2.component.html',
  styleUrls: ['./error-msg2.component.css']
})
export class ErrorMsg2Component implements OnInit {

  @Input() label!: string;


  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

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
