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
  myProfile: object = {
    name: 'Arun',
    exp: '14 years'
  }

  help: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolores fugit veniam dignissimos tempore similique pariatur veritatis nisi dicta sit, porro deserunt eum, cumque amet quae nostrum. Ea, rerum ducimus.";
  
  constructor() { }

  ngOnInit() {
  }

  isAuthenticated(): boolean{
    return this.isLoggedIn;
  }

}
