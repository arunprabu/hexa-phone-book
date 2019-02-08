import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  //Step 1: Create BehaviourSubject with default value for subscribed first
  private userProfile = new BehaviorSubject<string>("Arun");

  //Step 2: Create Observable for the BehaviourSubject.. so anyone can subscibe to it.
  latestUserProfile = this.userProfile.asObservable(); // latestUserProfile is subscribabale

  constructor() { 
    
  }
  

  updateUserProfile(newName){
    console.log(newName);
    this.userProfile.next(newName);
  }
}
