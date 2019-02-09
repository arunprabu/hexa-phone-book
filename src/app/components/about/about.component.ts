import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserAccountService } from 'src/app/services/shared/user-account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit, OnDestroy {

  birthday = new Date(1988, 3, 15); // April 15, 1988

  loremIpsum: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis perspiciatis ipsa id aliquid eaque quia inventore illum impedit iusto rerum, ad obcaecati suscipit enim eveniet repellendus labore fuga provident.";

  profileName: string;
  newName: string; 

  profileSubscription: Subscription;  // Important: Don't forget to unsubscribe

  // Step4: Subscribe to the latestUserProfile 
  constructor( private userAccountService: UserAccountService) { 
    this.profileSubscription = this.userAccountService.latestUserProfile.subscribe((value) => {
      console.log(value);
      this.profileName = value;
    });
  }

  ngOnInit() {
  }

  updateNameHandler(){
    console.log(this.newName);
    this.userAccountService.updateUserProfile(this.newName);
  }

  ngOnDestroy(){
    //When navigating away from this page this lifecycle hook fires
    this.profileSubscription.unsubscribe();
    console.log(this.profileSubscription);
  }
}
