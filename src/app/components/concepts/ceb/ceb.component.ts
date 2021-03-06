import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //send the dateOfLastVisit to parent comp
  dateOfLastVisit: any; //this data should be passed to the parent 

  //// step 1: creating custom event in the name of findLastVisit
  @Output() findLastVisit = new EventEmitter<string>();


  // For @ViewChild 
  featureName: string = "Custom Evt Binding";

  constructor() { 
    console.log("Inside CEB Constructor");
    this.dateOfLastVisit = new Date();
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
  }

  onSendHandler(){
    console.log("inside onSendHandler");
    // step 2: emit that event with value
    this.findLastVisit.emit(this.dateOfLastVisit);
  }
}
