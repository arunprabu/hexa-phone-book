import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: [
    `
    .red{
      color: red;
    }
    .green{
      color: green;
    }
    `
  ]
})
export class SdComponent implements OnInit {

  //strutural directives *ngIf
  isLoggedIn: boolean;
  sideMenus: object[] = [
    { url: '', name: 'Home'},
    { url: 'about', name: 'About'},
    { url: 'contact', name: 'Contact'},
    { url: 'faq', name: 'FAQ'}
  ];

  age: number = 20;
  
  constructor() { }

  ngOnInit() {
  }

  isAuthenticated(){
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }
}
