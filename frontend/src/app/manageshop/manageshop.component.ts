
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AdminserviceService } from '../adminservice.service'
import { CakeservicesService } from '../cakeservices.service';
import {CakesModel} from '../user-home/cakes.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-manageshop',
  templateUrl: './manageshop.component.html',
  styleUrls: ['./manageshop.component.css']
})
export class ManageshopComponent implements OnInit {
registerForm: FormGroup;
submitted = false;
add=false;
stock=false;
update=false;
newcake;
item=new CakesModel('','',null,null,null,null,null,null,null)
constructor(private formBuilder: FormBuilder, private router:Router, private cakeservices:CakeservicesService,private adminservice:AdminserviceService) { }
    ngOnInit(): void {
       this.registerForm = this.formBuilder.group({
          name: [this.item.name, Validators.required],
          price: [this.item.price, Validators.required],
          quantity: [this.item.quantity, Validators.required],
          details: [this.item.details, Validators.required],
          img: [this.item.img, Validators.required]
            });
          }
    fn1(){
      this.add=true;
      this.update=false;
      this.stock=false;
        }
    fn2(){
      this.stock=true;
      this.update=false;
      this.add=false;
        }
    fn3(){
      this.update=true;
      this.stock=false;
      this.add=false;
        }
get f() { return this.registerForm.controls; }
onSubmit() {
      this.submitted = true;
      
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      console.log(this.item.name)
      this.item.rating='6';
      this.adminservice.addCake(this.item);
      location.reload();
      this.router.navigate(['/admin/home/stock']) 


  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}




