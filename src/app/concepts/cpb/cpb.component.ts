import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  //after @input decorator added, the variable becomes a property and it will be available in parent
  @Input() myAge: number = 20;
  constructor() { }

  ngOnInit() {
  }

}
