import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginserviceService} from '../loginservice.service'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  a:string;
  b:string;

  constructor(private formBuilder: FormBuilder,private loginservice:LoginserviceService,private router:Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]],

  });
  }
  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
      
 
      
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
     
        this.loginservice.adminlogin(this.registerForm.value) .subscribe((res:any)=>{
         
          if((JSON.parse(JSON.stringify(res)).msg)==="success"){
            localStorage.setItem('token',res.token)
             localStorage.setItem('token_admin',res.token_admin)
            console.log("im in if success of login")
            // localStorage.setItem('token',res.token)
            if (res.token==(res.token_admin)){
            localStorage.setItem('token_admin',res.token_admin)
            console.log("in admins  logincomponent.ts "+res.token)
            this.router.navigate(['/admin/home'])
              }
              else{
                alert("Not Admin?...Incorrect Password")
              }
            }
            
          else{
                console.log("Im in else statement of admin login")
                 alert(JSON.parse(JSON.stringify(res)).msg)
                  this.router.navigate(['/'])
               }
         })
      }
        
        
      

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }


}
