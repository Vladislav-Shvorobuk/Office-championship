import { OnInit, Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signInFormGroup: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signInFormGroup = this.createSignInFormGroup();
    console.info('INFO: sign-in/component');
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
    this.submitted = true;

    if (this.signInFormGroup.invalid) {
      return;
    }
    const { email, password } = this.signInFormGroup.controls;
    this.authService.signIn(email.value, password.value);
  }

  goToRegistration() {
    this.router.navigate(['/greeting/sign-up']);
  }
}
