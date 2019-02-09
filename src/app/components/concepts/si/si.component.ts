import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styles: []
})
export class SiComponent implements OnInit {
  
  featureName: string = "String Interpolation is awesome";
  isLoggedIn: boolean = true;
  myAge: number = 20;

  mySkillsList: string[] = [ 'html', 'css', 'js'];
  //myProfile: IProfile;


  help: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolores fugit veniam dignissimos tempore similique pariatur veritatis nisi dicta sit, porro deserunt eum, cumque amet quae nostrum. Ea, rerum ducimus.";
  
  constructor() { 
    //this.myProfile.exp = "14 years";
  }

  ngOnInit() {
  }

  isAuthenticated(): boolean{
    return this.isLoggedIn;
  }

}

// export interface IProfile{
//   name: string,
//   exp: string
// }
