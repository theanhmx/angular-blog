import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {
  blog: Observable<any>;

  constructor(db: AngularFireDatabase) {
  	this.blog = db.object('blog').valueChanges();
  }
}
