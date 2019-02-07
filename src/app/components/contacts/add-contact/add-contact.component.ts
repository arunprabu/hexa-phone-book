import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  submissionStatus: string;
  statusCode: number;

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
                        .subscribe( (resp) => {  //3. get response from service 
                          console.log(resp);
                          if(resp && resp.id){
                            //4. assign it to local variable so that it can be used in html thru data binding
                            this.submissionStatus = "Thanks for Creating a contact";
                            this.statusCode = 200; 
                          }
                        });
  }

}
