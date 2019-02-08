import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import {environment} from '../../environments/environment';


//decorator 
@Injectable({
  providedIn: 'root'
})
// app-wide and lazy loading services
export class ContactService {

  _url: string; 
  
  constructor( private http: Http) { 
    
  }

  //1. get data from comp 
  create( contactData ){
    console.log(contactData);
    //2. send the data to rest api 
    return this.http.post('http://jsonplaceholder.typicode.com/users', contactData)
                    .pipe(map( (resp: any ) =>{ //3. receive resp from rest api 
                      console.log(resp);
                      return resp.json(); // 4. send the resp back to the component 
                    }))
  }

  getContacts(){
     //2. send request to rest api 
    return this.http.get('http://jsonplaceholder.typicode.com/users')
                    .pipe(map( (resp: any ) =>{ //3. receive resp from rest api 
                      console.log(resp);
                      return resp.json(); // 4. send the resp back to the component 
                    }));
  }

  getContactById( id: number){
    //2. send request to rest api
    this._url = `http://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get(this._url)
                    .pipe(map( (resp: any ) =>{ //3. receive resp from rest api 
                      console.log(resp);
                      return resp.json(); // 4. send the resp back to the component 
                    }));
  }


  update( contactData ){
    this._url = `http://jsonplaceholder.typicode.com/users/${contactData.id}`;
    return this.http.put(this._url, contactData)
              .pipe(map( (resp: any ) =>{ //3. receive resp from rest api 
                console.log(resp);
                return resp.json(); // 4. send the resp back to the component 
              }));
  }

  // TODO
  delete(){

  }

}
