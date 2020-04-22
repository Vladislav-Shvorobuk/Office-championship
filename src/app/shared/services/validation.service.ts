import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  getErrorMessage(inputName, formGroup) {
    let errorMessage = '';
    if (
      formGroup.controls[inputName].errors &&
      formGroup.controls[inputName].dirty
    ) {
      switch (true) {
        case !!formGroup.controls[inputName].errors.required:
          errorMessage = 'This field is required.';
          break;
        case !!formGroup.controls[inputName].errors.email:
          errorMessage = 'eg: example@gmail.com';
          break;
        case !!formGroup.controls[inputName].errors.minlength: {
          const length = formGroup.controls[inputName].errors.minlength.requiredLength;
          errorMessage = `Too short, required min length - ${length}`;
          break;
        }
        case !!formGroup.controls[inputName].errors.maxlength: {
          const length = formGroup.controls[inputName].errors.maxlength.requiredLength;
          errorMessage = `Too long, required max length - ${length}`;
          break;
        }
        case !!formGroup.controls[inputName].errors.notUnique: {
          errorMessage = `Not Unique, already exist`;
          break;
        }
        case !!formGroup.controls[inputName].errors.pattern: {
          errorMessage = `Password must contain lower-case, upper-case and numeric characters`;
          break;
        }
        default:
          errorMessage = '';
      }

      return errorMessage;
    }
  }
}
