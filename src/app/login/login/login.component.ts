import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: boolean;
  private register: boolean;

  constructor() { }

  ngOnInit() {

    this.login = true;
    this.register = false;

  }

  showLogin() {
    this.login = !(this.register = false);
  }
 
  showRegister() {
    this.register = !(this.login = false);
  }

}
