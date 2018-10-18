import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  email: string;
  password: string

  ngOnInit() {
  	this.email = '';
    this.password = '';
  }

  submit(): void {
    this.authService.login(this.email, this.password).then(value => {
      console.log('Nice, it worked!', Router);
      this.router.navigateByUrl('/setting');
    }).catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }
}
