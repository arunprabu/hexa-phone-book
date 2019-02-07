import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: Array<object>;

  constructor( private contactService: ContactService) {  //connecting to service
    console.log("Inside constructor");
  }

  ngOnInit() { //lifecycle hook
    console.log("Inside ngOnInit");
    this.contactService.getContacts()
                        .subscribe( (resp) =>{
                          console.log(resp);
                          this.contactList = resp;
                        })
  }



}
