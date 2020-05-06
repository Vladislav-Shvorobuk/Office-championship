import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { auth } from 'firebase';
import { FormGroup } from '@angular/forms';
import { ValidationService } from './validation.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _uid: string;
  private _isEmailExist: boolean;
  private _userNotFound: boolean;
  private _wrongPassword: boolean;
  private _tooManyRequests: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private validationService: ValidationService,
    private router: Router
  ) {}

  signIn(email: string, password: string, formGroup: FormGroup): void {
    from(this.afAuth.signInWithEmailAndPassword(email, password)).subscribe(
      (data: any) => {
        this._isEmailExist = false;
        this._userNotFound = false;
        this._wrongPassword = false;
        this._tooManyRequests = false;
        this._uid = data?.user.uid;
        console.info('You have been successfully logged in!');
        this.router.navigate(['/office-workout']);
      },
      (error) => {
        this.validationService.setFormControlError(error, formGroup);
      }
    );
  }

  registerUser(email: string, password: string, formGroup: FormGroup): void {
    from(this.afAuth.createUserWithEmailAndPassword(email, password)).subscribe(
      (data) => {
        this._isEmailExist = false;
        this._userNotFound = false;
        this._wrongPassword = false;
        this._uid = data.user.uid;
      },
      (error) => {
        this.validationService.setFormControlError(error, formGroup);
      }
    );
  }

  // Sign in with Facebook
  signInWithFacebook() {
    const provider = new auth.FacebookAuthProvider();

    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        // must be redirect to some page
        const token = (result.credential as auth.OAuthCredential).accessToken;
        const user = result.user;
        console.info('You have been successfully logged in!');
        this.router.navigate(['/office-workout']);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
        console.info(error);
      });
  }

  signOut() {
    this.afAuth.signOut()
      .then((res) => {
        this.router.navigate(['/greeting/sign-in']);
      })
      .catch((error) => {
        console.info('Ooops..., something went wrong: ', error);
      });
  }

  get uid(): string {
    return this._uid;
  }

  set uid(value: string) {
    this._uid = value;
  }

  get isEmailExist(): boolean {
    return this._isEmailExist;
  }

  get userNotFound(): boolean {
    return this._userNotFound;
  }

  get wrongPassword(): boolean {
    return this._wrongPassword;
  }

  get tooManyRequests(): boolean {
    return this._tooManyRequests;
  }
}
