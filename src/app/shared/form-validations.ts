import { FormArray, Validators } from '@angular/forms';
export class FormValidations{ // pode ser um service
  static requiredMinCheckbox(min = 1){ // as validações tradicionais não servem para os forms arrays
    const validator = (formArray: FormArray) => {
      //Programação estruturada
    //   const values = formArray.controls;
    //   let totalChecked = 0;
    //   for(let i = 0; i< values.length; i++){
    //     if(values[i].value){
    //       totalChecked +=1
    //     }
    //   }
    //   return totalChecked >= min ? null :  {required: true};//pode retornar qualque coisa na parte entr chaves
    // }
    const totalChecked = formArray.controls
                        .map(v => v.value)//vetor de true ou false
                        .reduce((total, current) => current ? total+current : total, 0);
    return totalChecked >= min ? null :  {required: true};
    }
    return validator as Validators;
  }
}
