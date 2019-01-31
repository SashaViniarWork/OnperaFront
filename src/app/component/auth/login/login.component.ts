import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../../shared/services/api.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  constructor(public router: Router, public api: ApiService,  private fb: FormBuilder) {
    this.loginForm = fb.group({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {
  }
  navToRegistration() {
   this.router.navigate(['auth/registration']);
  }

  navToAdmin(val) {
    this.api.post('api/login', val).subscribe(res => {
      console.log(res);
    });
    // this.router.navigate(['admin/main']);
  }
}
