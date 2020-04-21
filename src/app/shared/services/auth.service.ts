import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable()
export class AuthService {
  private _uid: string;
  private _isEmailExist: boolean;

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
        this._uid = data.user.uid;
      },
      (error) => {
        if (error.code === 'auth/email-already-in-use') {
          this._isEmailExist = true;
        } else {
          console.info('error', error);
        }
      }
    );
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

  set isEmailExist(value: boolean) {
    this._isEmailExist = value;
  }
}
