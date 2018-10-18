import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../providers/fire-db.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-setting',
  templateUrl: './blog-setting.component.html',
  styleUrls: ['./blog-setting.component.scss']
})
export class BlogSettingComponent implements OnInit {
	items: Observable<{}>;
  constructor(public fireDbService: FireDbService, public db: AngularFireDatabase) {
  	this.items = db.object('blog').valueChanges();
  	console.log('this.items', this.items);
  }

  ngOnInit() {
  }
}
