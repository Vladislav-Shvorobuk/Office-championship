import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}
}
