import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private FireStore : AngularFirestore) { }

  Create(table,record){
    return this.FireStore.collection(table).add(record);
  }

  Read(table){
    return this.FireStore.collection(table).snapshotChanges();
  }

  Update(table,recordId,record){
    return this.FireStore.doc(table+'/'+recordId).update(record);
  }

  Delete(table,recordId){
    return this.FireStore.doc(table+'/'+recordId).delete();
  }
/*
  Search(table){
    return this.FireStore.collection(table).ref.where('email','==',12).orderBy('email').limit(10).get();
  }*/
}
