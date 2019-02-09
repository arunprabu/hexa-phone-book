import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Alert {

  constructor(){

  }

  showErr(){
    console.log("An err occured");
  }

  showMsg(data){
    console.log(data);
  }
}
