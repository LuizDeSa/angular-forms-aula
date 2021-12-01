import { FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
// já existe uma serie de bibiotecas prontas com diversas validações como o ng2-validation
export class FormValidations{ // pode ser um service
  static requiredMinCheckbox(min = 1){ // as validações tradicionais não servem para os forms arrays
    const validator = (formArray: FormArray) => { // isso é necessario pois estamos passando uma string como parametro e não o proprio controle
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

  static cepValidator(control: FormControl){ // Aqui estamos passando o controle
    const cep = control.value;
    if(cep && cep !== ''){
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : {cepInvalido : true};
    }
    return null;
  }

  static equalsTo(otherField: string){
    const validator = (formControl: FormControl) => {
      if(otherField == null){
        throw new Error('É necessario informar um campo');
      }

      if(!formControl.root || !(<FormGroup>formControl.root).controls){
        return null
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if(!field){
        throw new Error('É necessario informar um campo valido!');
      }

      if(field.value !== formControl.value){
        return {equalsTo: otherField};
      }
      return null;
    };
    return validator;
  }
}
