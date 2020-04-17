import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';


@Injectable()
export class AuthService {
  private _uid: string;

  constructor(
    private afAuth: AngularFireAuth
  ) {}

  signIn( email: string, password: string ): void {
    from(this.afAuth.signInWithEmailAndPassword( email, password ))
      .subscribe(
         data => this._uid = data.user.uid,
         error => console.info('error', error)
      );
  }
  registerUser(email: string, password: string ): void {
    from(this.afAuth.createUserWithEmailAndPassword( email, password ))
      .subscribe(
        data => this._uid = data.user.uid,
        error => console.info('error', error)
      );
  }

  get uid(): string {
    return this._uid;
  }

  set uid(value: string) {
    this._uid = value;
  }
}
