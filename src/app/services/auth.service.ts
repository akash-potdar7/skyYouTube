import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs/'
import { switchMap } from 'rxjs/operators'

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
    ) {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          else return of(null);
        })
      );
  }

  async signOut() {
    return await this.router.navigate(['']);
  }

  async signIn(user) {
    await this.updateUserData(user);
    this.router.navigate(['home']);
  }

  private updateUserData({uid, providerData}) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${uid}`);
    const data: User = {
      uid: uid,
      email: providerData.email,
      displayName: providerData.displayName
    }
    return userRef.set(data, {merge: true});
  }

}
