import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    console.info('INFO: sign-up/component');
  }

  register() {
    if (this.signUpFormGroup.invalid) {
      return;
    }
    const { email, password } = this.signUpFormGroup.controls;
    this.authService.registerUser(email.value, password.value);
  }
}
