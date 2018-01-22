import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  age : number;
  gender : string;
  isEligible : boolean;
  constructor() { }

  ngOnInit() {
  }

  verify(age, gender){
    this.age = age;
    this.gender = gender;
    if((this.age >= 18 && this.gender == 'female') || (this.age >= 21 && this.gender == 'male')){
      this.isEligible = true;
    }
    else{
      this.isEligible = false;
    }
    console.log(this.isEligible);
  }
  checkEligibility(age) {
    if(age > 18 ){
      this.isEligible = true;
    }  
    else{
      this.isEligible = false;
    }
  }  
}
