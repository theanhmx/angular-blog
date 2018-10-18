import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
  	console.log('constructor called');
  }
}
