import {OnInit, Component} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Auth} from '../../shared/services/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInFormGroup: FormGroup;
  public submitted = false;

  constructor(private fb: FormBuilder, private signInService: Auth) {
  }

  ngOnInit(): void {
    this.signInFormGroup = this.createSignInFormGroup();
    console.log('sign-in');
  }

  createSignInFormGroup() {
    return this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/)
      ]]
    });
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.signInFormGroup.controls);
    // stop here if form is invalid
    if (this.signInFormGroup.invalid) {
      return;
    }
  }

  register() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signInFormGroup.invalid) {
      return;
    }
    this.signInService.registerUser( this.signInFormGroup.controls).subscribe(data => {
      console.log('data.user) ', data.user);
    });
  }
}
