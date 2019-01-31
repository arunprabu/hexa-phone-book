import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './header/search.component';
import { NavComponent } from './nav/nav.component';

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
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Step3: Module should in turn be bootstrapped with a component 
})
export class AppModule { }
