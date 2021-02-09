import { Component, OnInit } from '@angular/core';
import {UserModel} from '../signin/user.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './mustmatch.validator';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  // newuser=new UserModel('','','','');
  constructor(private formBuilder: FormBuilder,private loginservice:LoginserviceService,private router: Router) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
     
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
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
      // alert(this.registerForm.value.email);
      // console.log(this.newuser)
      this.loginservice.signup(this.registerForm.value).subscribe(res=>{
 
        console.log("im here sneha");
        if((JSON.parse(JSON.stringify(res)).msg)=="success"){
          console.log("im in if success of signup")
          this.router.navigate(['/login']);
      
        }
        else{
          console.log("Im in else statement of signup")
          alert(JSON.parse(JSON.stringify(res)).msg)
          this.router.navigate(['/signup'])
        }
     
// console.log(this.registerForm.value.email)
        // display form values on success
     
      
    })
  }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}

