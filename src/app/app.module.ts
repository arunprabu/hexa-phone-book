import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    CebComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Step3: Module should in turn be bootstrapped with a component 
})
export class AppModule { }
