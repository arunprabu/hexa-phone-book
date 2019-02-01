import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  youLastVisited: string;
  constructor() { }

  ngOnInit() {
  }

  // getMyAge():number {
  //   return 60;
  // }

  onFindLastVisitHandler(data){
    console.log(data);
    this.youLastVisited = data;
  }
}

