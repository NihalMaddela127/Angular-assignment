import { Component, OnInit } from '@angular/core';
import { Istudents } from '../dashcomp/casesensitive';
import { AspirantFormService } from './aspirantform.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-newaspirant',
  templateUrl: './newaspirant.component.html',
  styleUrls: ['./newaspirant.component.css']
})
export class NewaspirantComponent implements OnInit {

  // name : string;
  // branch : string;
  // prefLang : string;
  // college : string;
  // percentage : string;
  aspirants : Istudents[];
  aspirant: Iaspirant = new Iaspirant();

  constructor(private aspirantformService: AspirantFormService) {
    this.aspirantformService.getAspirants()
    .subscribe(aspirants => {
        this.aspirants = aspirants;
    });
   }
  
  ngOnInit() {
  }

  save(signupForm: NgForm){

    //   var newData = {
    //     name: signupForm.value.firstName,
    //     branch: signupForm.value.branchName,
    //     prefLang : signupForm.value.prefLangName,
    //     college: signupForm.value.collegeName,
    //     percentage: signupForm.value.percentName,
    // }
    
    // this.aspirantformService.addData(newData)
    //     .subscribe(data => {
    //         this.aspirants.push(data);
    //         this.name = '';
    //         this.branch = '';
    //         this.prefLang = '';
    //         this.college = '';
    //         this.percentage = '';
    //     });

  this.aspirantformService.addData(signupForm.value)
  .then(
    (res)=>{console.log(res)},
    (err)=>{console.log(err)}
  )
  }
}

export class Iaspirant{
    id:string;
    Name:string;
    Branch:string;
    College:string;
    Percentage:string;
}
