import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Istudents } from './casesensitive'
import { FilterPipe } from './filter.pipe';
import { appService } from './studentdatabase.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AspirantFormService } from '../newaspirant/aspirantform.service';

@Component({
  selector: 'app-dashcomp',
  templateUrl: './dashcomp.component.html',
  styleUrls: ['./dashcomp.component.css'],
  providers: [appService],
  animations: [
    trigger('accessPanel',[
      transition('void => *',[
        style({transform: 'translateY(-100%)'}),
        animate(100)
      ])
    ])
  ]
})

export class DashcompComponent implements OnInit {
  students: Istudents[];
  Name : string;

  aspirants : Array<any>;  

  private _databaseservice: appService;
  constructor(dashcomp: appService, private aspirantformService: AspirantFormService){
  //this._databaseservice = dashcomp;
  
}
  
  ngOnInit(): void {
    //this.students=this._databaseservice.getstudents();
    this.aspirantformService.getAspirants()
  .subscribe(aspirants => {
      this.aspirants = aspirants;
  });
  }

@Output('response')
change:EventEmitter <number> = new EventEmitter<number>();

display(val){
  this.change.emit(val);
}

getName(name){
  this.Name = name;
  //console.log(this.Name);
}
}
