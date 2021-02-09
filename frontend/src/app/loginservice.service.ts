import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  signup(newuser){
    // console.log("iminlogin service  to app.js..")
   return this.http.post("http://localhost:3000/user/signup",newuser)
 }
 login(user:any){
  console.log("iminlogin service  to app.js..")
  return this.http.post("http://localhost:3000/user/login",user)

 }
 adminlogin(user:any){
  console.log("imin adminlogin service  to app.js..")
  return this.http.post("http://localhost:3000/user/adminlogin",user)

 }

 sendfb(message,user){
   console.log("im in feebdsend")
  return this.http.post("http://localhost:3000/user/feedback",{message,user})
 }
 getfb(){
  return this.http.get("http://localhost:3000/user/feedback")
 }
 loggedIn(){
  return !!localStorage.getItem('token')
}
adminlogg(){
  return !!localStorage.getItem('token_admin')
}
getToken(){
  return localStorage.getItem('token')
}
}
