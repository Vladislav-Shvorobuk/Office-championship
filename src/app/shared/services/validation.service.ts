import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  constructor() {}

  setFormControlError(error, formGroup) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        formGroup.controls.email.setErrors({ notUnique: true });
        break;
      case 'auth/user-not-found':
        formGroup.controls.email.setErrors({ userNotFound: true });
        break;
      case 'auth/wrong-password':
        formGroup.controls.password.setErrors({ wrongPassword: true });
        break;
      case 'auth/too-many-requests':
        formGroup.controls.password.setErrors({ tooManyRequests: true });
        break;
      default:
        console.info('Not known error: ', error);
    }
  }

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
          const length =  formGroup.controls[inputName].errors.minlength.requiredLength;
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
        case !!formGroup.controls[inputName].errors.userNotFound: {
          errorMessage = `User not found`;
          break;
        }
        case !!formGroup.controls[inputName].errors.wrongPassword: {
          errorMessage = `Wrong password`;
          break;
        }
        case !!formGroup.controls[inputName].errors._tooManyRequests: {
          errorMessage = `Too many requests, try later please`;
          break;
        }
        case !!formGroup.controls[inputName].errors.pattern: {
          errorMessage = `Password must contain lower-case, upper-case and numeric characters`;
          break;
        }
        default:
          errorMessage = '';
      }
    }
    return errorMessage;
  }
}
