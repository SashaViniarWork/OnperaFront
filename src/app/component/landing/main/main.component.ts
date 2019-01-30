import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  images: any[];

  constructor() {
    this.images = [
      {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/1200px-Fronalpstock_big.jpg'},
      {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/1200px-Fronalpstock_big.jpg'},
      {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/1200px-Fronalpstock_big.jpg'}
    ];
  }

  ngOnInit() {
  }

}
