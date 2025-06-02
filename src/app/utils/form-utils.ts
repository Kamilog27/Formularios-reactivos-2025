import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";

async function  sleep(){
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve(true)
    },2500)
  })
}

export class FormUtils{
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

   static isValidField(form:FormGroup,fieldName:string):boolean|null{
        return (form.controls[fieldName].errors && form.controls[fieldName].touched) ;
    
    }
    static isValidFieldInArray(form:FormArray,index:number):boolean|null{
      return (form.controls[index].errors && form.controls[index].touched) ;
  
  }
    static getFieldError(form:FormGroup,fieldName:string):string|null{
        if(!form.controls[fieldName])return null;
        const errors = form.controls[fieldName].errors??{};
        for(const key of Object.keys(errors)){
          switch(key){
            case 'required':
              return 'Este campo es requerido';
              case 'minlength':
              return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`
              case 'min':
              return `Valor mínimo de ${errors['min'].min}.`
              case 'email':
                return `El valor ingresado no es un correo electrónico`;
              case 'emailTaken':
                return `El correo electrónico ya está siendo usado por otro usuario`;
              case 'strider':
                return `No se puede usar el nombre de strider en la app`;
              case 'pattern':
                if(errors['pattern'].requiredPattern==FormUtils.emailPattern){
                  return 'El valor ingresado no luce como un correo electrónico no permitido';
 
               }
               return 'Error de patrón contra expresión regular';
              default:
                return `Error de validación no controlado ${key}`;
          }
        }
        return null;
      }
    static getFieldArrayError(form:FormArray,index:number):string|null{
        if(!form.controls[index])return null;
        const errors = form.controls[index].errors??{};
        for(const key of Object.keys(errors)){
          switch(key){
            case 'required':
              return 'Este campo es requerido';
              case 'minlength':
              return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`
              case 'min':
              return `Valor mínimo de ${errors['min'].min}.`
              
          }
        }
        return null;
      }

      

  static isFieldOneEqualFieldTwo(field1:string,field2:string){
    return(formGroup:AbstractControl)=>{
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;
      return field1Value===field2Value?null:{passwordNotEqual:true}

    }

  }

  static async checkingServerResponse(control:AbstractControl):Promise<ValidationErrors | null>{
    await sleep();
    const formValue=control.value;
    if(formValue === 'hola@mundo.com'){
      return {
        emailTaken:true,
      }
    }
    return null;
  }
  static noStrider(control:AbstractControl):ValidationErrors | null{
    const formValue=control.value;
    if(formValue === 'strider'){
      return {
        strider:true,
      }
    }
    return null;
  }
}