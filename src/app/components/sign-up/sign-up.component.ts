import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import {ValidationService} from '../../shared/services/validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup: FormGroup;
  public getErrorMessage;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private validationService: ValidationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.info('INFO: sign-up/component');
    this.signUpFormGroup = this.createSignUpFormGroup();
    this.getErrorMessage = this.validationService.getErrorMessage;
  }

  createSignUpFormGroup() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.signUpFormGroup.invalid) {
      return;
    }
    const { email, password } = this.signUpFormGroup.controls;
    this.authService.registerUser(email.value, password.value);

    if (!this.authService.isEmailExist) {
      this.signUpFormGroup.controls.email.setErrors({ notUnique: true });
    }
  }
  goToSignIn() {
    this.router.navigate(['/greeting/sign-in']);
  }
}
