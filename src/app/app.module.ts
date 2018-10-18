import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { LoginComponent } from './login/login.component';
import { BlogSettingComponent } from './blog-setting/blog-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    AvatarComponent,
    BlogFooterComponent,
    HeroImageComponent,
    LoginComponent,
    BlogSettingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
