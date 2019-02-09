import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Subscription } from 'rxjs';

import { IContact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactsSubscription: Subscription;

  //contactList: Array<IContact>;  alternatte syntax is below
  contactList: IContact[];

  constructor( private contactService: ContactService) {  //connecting to service
    console.log("Inside constructor");
  }

  ngOnInit() { //lifecycle hook
    console.log("Inside ngOnInit");
    this.contactsSubscription = this.contactService.getContacts()
                        .subscribe( (resp) =>{
                          console.log(resp);
                          this.contactList = resp;
                        });
  }

  ngOnDestroy(){
    //life cycle hooks 
    console.log("ngOnDestroy");
    this.contactsSubscription.unsubscribe();
  }


}
