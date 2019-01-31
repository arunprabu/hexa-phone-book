import { Component } from '@angular/core';

// component consists of html, css, ts and exposed in a selector -- to use as component 
// you can't reuse this component as it i root component
// all other components can be re-used
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',  //html  -- only one template per comp .. mandatory
  styleUrls: ['./app.component.css'] //css
})
export class AppComponent {
  //ts 
  title = 'hexa-phone-book';
}
