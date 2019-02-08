import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/shared/user-account.service';

@Component({
  selector: 'app-header',   //selector
  templateUrl: './header.component.html', //html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {
  //ts

  profileName:string;
  constructor(private userAccountService: UserAccountService) {
    this.userAccountService.latestUserProfile.subscribe((value) => {
      console.log(value);
      this.profileName = value;
    });
  }

  ngOnInit() {
  }

}
