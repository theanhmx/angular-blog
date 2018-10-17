import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { HeroImageComponent } from './hero-image/hero-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    AvatarComponent,
    BlogFooterComponent,
    HeroImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
