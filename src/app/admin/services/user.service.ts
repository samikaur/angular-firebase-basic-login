import { AngularFirestore } from 'angularfire2/firestore';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private afs: AngularFirestore) {}

  getUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
