import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: Object;
  contactId:number;

  constructor( private contactService: ContactService,
               private activatedRoute: ActivatedRoute
    ) {
    
    //read url params and get 'contactId' from id as it was specified in app.module routes setup
    this.activatedRoute.params.subscribe(params => {
        this.contactId = params['contactId'];
        console.log(this.contactId); // Print the parameter to the console. 
    })

  }

  ngOnInit() {
    this.contactService.getContactById(this.contactId)
                       .subscribe( (resp) => {
                          console.log(resp);
                          this.contactData = resp;
                       });
  }

}
