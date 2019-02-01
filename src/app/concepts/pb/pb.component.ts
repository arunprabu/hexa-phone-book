import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './pb.component.html',
  styles: [
    `.red{
      color: red;
    }`
  ]
})
export class PbComponent implements OnInit {

  myName: string = "Arun";

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn():boolean {
    return true;
  }

}
