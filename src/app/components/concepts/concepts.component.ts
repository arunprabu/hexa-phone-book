import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  @ViewChild(CebComponent) cebData;
  // TODO: use @ViewChildren() 

  youLastVisited: string;
  constructor() { 
    console.log("Inside Concepts Constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
  }

  ngAfterViewInit(){
    console.log("Inside ngAfterViewInit");
    console.log(this.cebData);
  }

  onFindLastVisitHandler(data){
    console.log(data);
    this.youLastVisited = data;
  }
}

