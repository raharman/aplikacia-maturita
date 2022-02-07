import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { 
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        /* console.log('auth changed: ',user); */
        if (user) {
          return this.db.doc(`users/${user.uid}`).valueChanges().pipe(
            take(1)
          );
        } else{
          return of(null);
        }
      })
    );
  }

  signUp(credentials){
    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
      return this.db.doc(`users/${data.user.uid}`).set({
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        email: data.user.email,
        role: 'USER',
        permission: []
      });
    });
  }

  signIn(credentials): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.user.uid}`).valueChanges().pipe(
            take(1)
          );
        } else{
          return of(null);
        }
      })
    )
  }
}
 