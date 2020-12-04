import { Component, OnInit } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {PopupService} from '../service/popup.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login={
    email:'',
    password:''
  }
  emailtest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(
    private router: Router,
    public msgService:PopupService
  ) { }

  ngOnInit(): void {
  }
  godasboard(registerData) {
    if(registerData.email=="" ||this.emailtest.test(String(registerData.email).toLowerCase())==false){
      this.msgService.openSnackBar('please enter valid email',false)
      return;
    }
    if(registerData.Password== "") {
      this.msgService.openSnackBar('please  enter password',false)
      return;
    }
    this.router.navigate(['dashboard']);
  }
  goregister() {
    this.router.navigate(['register']);
  }
  goforget() {
    this.router.navigate(['forget']);
  }
}
