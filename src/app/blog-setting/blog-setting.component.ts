import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../providers/fire-db.service';

@Component({
  selector: 'app-blog-setting',
  templateUrl: './blog-setting.component.html',
  styleUrls: ['./blog-setting.component.scss']
})
export class BlogSettingComponent implements OnInit {

  constructor(public fireDbService: FireDbService) {
  	
  }

  ngOnInit() {
  }
}
