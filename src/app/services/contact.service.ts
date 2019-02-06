import { Injectable } from '@angular/core';

//decorator 
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  //1. get data from comp 
  create( contactData ){
    console.log(contactData);
    //2. send the data to rest api 
    //3. receive response from rest api 
    //4. send it back to component 
  }

}
