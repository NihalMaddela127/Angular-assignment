import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashcompComponent } from './dashcomp/dashcomp.component';
import { Istudents } from './dashcomp/casesensitive'
import { FilterPipe } from './dashcomp/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyButtonDirective } from './dashcomp/dashcomp.mydirectivebutton';
import { MyResponseDirective } from './dashcomp/dashcomp.myresponse';
import { RouterModule, CanActivate, ActivatedRoute } from '@angular/router';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { AuthGuardService as AuthGuard } from './detaillist/mycanguard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewaspirantComponent } from './newaspirant/newaspirant.component';
import { HumanComponent } from './human/human.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'students', component : DashcompComponent},
      {path:'details/:name', component : DetaillistComponent, canActivate: [AuthGuard] },      
    ]),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule ],
  declarations: [
    DashcompComponent,
    FilterPipe,
    MyButtonDirective,
    MyResponseDirective,
    DetaillistComponent,
    NewaspirantComponent,
    HumanComponent,
  ],
  providers: [AuthGuard, HttpClientModule, HttpClient],
  exports : [DashcompComponent]
})
export class DashboardModule { }
