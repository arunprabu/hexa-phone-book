import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './shared/header/search.component';
import { NavComponent } from './shared/nav/nav.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { SiComponent } from './concepts/si/si.component';
import { PbComponent } from './concepts/pb/pb.component';
import { EbComponent } from './concepts/eb/eb.component';
import { TwbComponent } from './concepts/twb/twb.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';


const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/new', component: AddContactComponent },  // TODO: instead of this use child routing
  { path: 'contacts/:contactId', component: ContactDetailsComponent }  // TODO: instead of this use child routing,
]

//main switching box 
//to make a building block part of ng app 
//decorator -- ts function takes in param 
// params are called as metadata 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavComponent,
    ConceptsComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbComponent,
    CebComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //we used it to implement two way binding 
    RouterModule.forRoot(APP_ROUTES)   //for registering routes
  ],
  providers: [],
  bootstrap: [AppComponent] // Step3: Module should in turn be bootstrapped with a component 
})
export class AppModule { }
