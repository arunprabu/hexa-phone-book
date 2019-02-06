import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styles: [
    `

    `
  ]
})
export class GetInTouchComponent implements OnInit {

  getInTouchForm = new FormGroup({ // 1. create FormGroup
    firstName: new FormControl('test', Validators.required), // 2. create new FormControl for form fields
    lastName: new FormControl('', Validators.required), //3. adding validators for the form fields
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),  // 3.1 - added email validators
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]) // 3.2 password validators also added
  }); 


  //4. associate the getInTouchForm in html's formGroup
  //5. specify formControlName in form input elements in html 
  //6. write ngClass based validations
  //7. add if conditions for the error messages

  constructor() { }

  ngOnInit() {
  }

  
  sendInfoHandler(){
    console.log(this.getInTouchForm);
  }
}
