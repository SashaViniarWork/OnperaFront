import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navToRegistration() {
   this.router.navigate(['auth/registration']);
  }

  navToAdmin() {
    this.router.navigate(['admin/main']);
  }
}
