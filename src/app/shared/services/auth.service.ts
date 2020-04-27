import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { auth } from 'firebase';

@Injectable()
export class AuthService {
  private _uid: string;
  private _isEmailExist: boolean;
  private _userNotFound: boolean;
  private _wrongPassword: boolean;

  constructor(private afAuth: AngularFireAuth) {}

  signIn(email: string, password: string): void {
    from(this.afAuth.signInWithEmailAndPassword(email, password)).subscribe(
      (data) => (this._uid = data.user.uid),
      (error) => console.info('error', error)
    );
  }
  registerUser(email: string, password: string): void {
    from(this.afAuth.createUserWithEmailAndPassword(email, password)).subscribe(
      (data) => {
        this._isEmailExist = false;
        this._userNotFound = false;
        this._wrongPassword = false;
        this._uid = data.user.uid;
      },
      (error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this._isEmailExist = true;
            break;
          case 'auth/user-not-found':
            this._userNotFound = true;
            break;
          case 'auth/wrong-password':
            this._wrongPassword = true;
            break;
          default:
            console.info('error', error);
        }
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
        console.info('You have been successfully logged in!', result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.info(error);
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
}
