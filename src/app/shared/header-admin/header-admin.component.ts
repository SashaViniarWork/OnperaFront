import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  public closeStyle = '';
  public show = false;
  public menuValidation = false;

  constructor() {
  }

  ngOnInit() {
    this.menuValid();
  }

  menuValid() {
    console.log(localStorage.getItem('token'));
    this.menuValidation = !!localStorage.getItem('token');

  }

  onBurgerClick() {
    this.show = !this.show;
    if (this.show) {
      this.closeStyle = 'navigate-mobile';
    } else {
      this.closeStyle = '';
    }
  }

  closeMenu() {
    this.show = !this.show;
    this.closeStyle = '';
  }

  logout() {
    localStorage.clear();
  }
}
