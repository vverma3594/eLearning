import { Component, OnInit } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {PopupService} from '../service/popup.service'
import {HttpService} from '../service/http.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   emailtest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private options: string[] = ["please select one","teacher", "student"];
  
register={
  FirstName:'',
  lastName:'',
  DateOfBirth:'',
  category:'',
  PhoneNumber:'',
  email:'',
  Password:'',
  rePassword:'',
  term:'',
}

  constructor(
    private router: Router,
    public msgService:PopupService,
    public authService:HttpService
  ) { }

  ngOnInit(): void {
  }
  gosignin() {
    this.router.navigate(['login']);
  }

  submit(registerData){
    console.log('object :>> ', registerData);
if(registerData.FirstName==""){
  this.msgService.openSnackBar('please enter first name',false)
  return;
}
if(registerData.lastName==""){
  this.msgService.openSnackBar('please enter lastName',false)
  return;
}
if(registerData.DateOfBirth==""){
  this.msgService.openSnackBar('please enter DateOfBirth',false)
  return;
}
if(registerData.category== "" ){
  this.msgService.openSnackBar('please enter category',false)
  return;
}
if(registerData.PhoneNumber=="" ||!(/^\d{10}$/.test(registerData.PhoneNumber))){
  this.msgService.openSnackBar('please enter valid PhoneNumber',false)
  return;
}
if(registerData.email=="" ||this.emailtest.test(String(registerData.email).toLowerCase())==false){
  this.msgService.openSnackBar('please enter valid email',false)
  return;
}
if(registerData.Password=="") {
  this.msgService.openSnackBar('please  enter password',false)
  return;
}
if(registerData.Password!= registerData.rePassword ){
  this.msgService.openSnackBar('please  enter valid password',false)
  return;
}
if(registerData.term!=true){
  this.msgService.openSnackBar('please select term & condition',false)
  return;
}
let obj={
firstName:registerData.FirstName,
lastName:registerData.lastName,
user_name:registerData.email,
category:registerData.category,
DOB:registerData.DateOfBirth,
email:registerData.email,
password:registerData.Password,
cofirmPassword:registerData.rePassword,
termAndCondition:registerData.term,
mob_no:registerData.PhoneNumber
}
 this.authService.userRegistration(obj).subscribe(res=>{
 console.log('res :>> ', res);
 },err=>{
  console.log(err.message)
})
  }
}
