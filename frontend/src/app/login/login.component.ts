import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private loginservice:LoginserviceService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],

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
        console.log("heyy heroo")
        this.loginservice.login(this.registerForm.value) .subscribe((res:any)=>{
        //  console.log((JSON.parse(JSON.stringify(res)).msg))
          if((JSON.parse(JSON.stringify(res)).msg)==="success"){
             console.log("im in if success of login")
            localStorage.setItem('token',res.token)
            this.router.navigate(['/home'])
                }

          if((JSON.parse(JSON.stringify(res)).msg)=="Inorrect Password "){
           console.log("im in if password incorrect of login")
             alert(JSON.parse(JSON.stringify(res)).msg+"Please try again")
             this.router.navigate(['/login'])              
                }
            
          else if((JSON.parse(JSON.stringify(res)).msg)!="success"){
               console.log("Im in else statement of login")
              alert(JSON.parse(JSON.stringify(res)).msg)
              this.router.navigate(['/signup'])
               }
         })
      }
        
        

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}

