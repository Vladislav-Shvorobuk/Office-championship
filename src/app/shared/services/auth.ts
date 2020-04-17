import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {from, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()
export class Auth {

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  registerUser(formData): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(formData.email.value, formData.password.value))
      // .pipe(
      //   map(data => {
      //     return data;
      //   })
      // );
    }
}
