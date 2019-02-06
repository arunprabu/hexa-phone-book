import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  
  constructor( private contactService: ContactService ) {  //1. connect to service using dependency injection

  }

  ngOnInit() {
  }

  onSubmitHandler(formData){
    console.log(formData);

    //write validation logic 
    // if(formData.controls.email.touched && formData.controls.email.value == ''){
      
    // }

    console.log(formData.value);
    

    //2. send formData.value to service 
    this.contactService.create(formData.value)

    //3. get response from service 
    //4. bind it to html 
    
  }

}
