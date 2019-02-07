import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/shared/header/search.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { SiComponent } from './components/concepts/si/si.component';
import { PbComponent } from './components/concepts/pb/pb.component';
import { EbComponent } from './components/concepts/eb/eb.component';
import { TwbComponent } from './components/concepts/twb/twb.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { SdComponent } from './components/concepts/sd/sd.component';
import { ColorizerDirective } from './directives/colorizer.directive';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';


const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/new', component: AddContactComponent },  // TODO: instead of this use child routing
  { path: 'contacts/:contactId', component: ContactDetailsComponent },  // TODO: instead of this use child routing,
  { path: 'get-in-touch', component: GetInTouchComponent}
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
    ContactDetailsComponent,
    SdComponent,
    ColorizerDirective,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //we used it to implement two way binding 
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES //, 
                          // {
                          //   enableTracing: true // it will print the routing trace in console.log -- it is optional
                          // }
    ),   //for registering routes
    HttpModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent] // Step3: Module should in turn be bootstrapped with a component 
})
export class AppModule { }
