import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
