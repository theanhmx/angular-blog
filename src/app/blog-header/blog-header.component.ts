import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../providers/fire-db.service';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss']
})
export class BlogHeaderComponent implements OnInit {
	title: string;
	avatar: string;
	cover: string;

  constructor(public fireDbService: FireDbService) { }

  ngOnInit() {
  	this.fireDbService.blog.subscribe(blog => {
  		this.title = blog.title;
  		this.avatar = blog.avatar;
			this.cover = blog.cover;
  		document.title = blog.title;
  	})
  }
}
