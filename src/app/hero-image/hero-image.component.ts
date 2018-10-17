import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {
	@Input() src: string;
  constructor() { }

  ngOnInit() {
  	console.log('HeroImageComponent', this.src)
  }

}
