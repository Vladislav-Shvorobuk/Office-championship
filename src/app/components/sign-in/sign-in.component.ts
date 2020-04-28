import { OnInit, Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInFormGroup: FormGroup;
  public getErrorMessage;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private validationService: ValidationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.info('INFO: sign-in/component');
    this.signInFormGroup = this.createSignInFormGroup();
    this.getErrorMessage = this.validationService.getErrorMessage;
  }

  createSignInFormGroup() {
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
    });
  }

  onSubmit() {
    if (this.signInFormGroup.invalid) {
      return;
    }
    const { email, password } = this.signInFormGroup.controls;
    this.authService.signIn(email.value, password.value, this.signInFormGroup);
  }

  goToRegistration() {
    this.router.navigate(['/greeting/sign-up']);
  }
}
