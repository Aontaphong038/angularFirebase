import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class FirebaseService {

  constructor(private firebaseDB: AngularFireDatabase) { }

  getDataList() {
    return this.firebaseDB.list('/data');
  }

  addData(formModel) {
    return this.firebaseDB.list('/data').push(formModel);
  }

  editData(formModel) {
    return this.firebaseDB.list('/data').update(formModel.key, formModel);
  }

  deleteData(key) {
    return this.firebaseDB.list('/data').remove(key);
  }
}
