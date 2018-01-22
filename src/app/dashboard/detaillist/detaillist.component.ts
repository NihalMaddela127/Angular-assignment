import { Component, OnInit } from '@angular/core';
import {  trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from './mycanguard.service';
import { appService } from '../dashcomp/studentdatabase.service';
import { Istudents } from '../dashcomp/casesensitive';

@Component({
  selector: 'app-detaillist',
  templateUrl: './detaillist.component.html',
  
  providers: [appService],
  animations: [
    trigger('movePanel',[
      transition('void => *',[
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ])
    ])
  ]
})
export class DetaillistComponent implements OnInit {
  studentid : string;
  sub : any;
  student: Istudents;
  constructor(private route: ActivatedRoute, private _databaseservice :appService ) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.studentid = params['name'];
      this.student=this._databaseservice.getstudents().find(a => a.Name==this.studentid);
    })
  }
}
