import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {CakesModel} from '../user-home/cakes.model';
import {CakeservicesService} from '../cakeservices.service'
import {AdminserviceService } from '../adminservice.service'

@Component({
  selector: 'app-userhomesinglecake',
  templateUrl: './userhomesinglecake.component.html',
  styleUrls: ['./userhomesinglecake.component.css']
})
export class UserhomesinglecakeComponent implements OnInit {
  id: String ='';
  registerForm: FormGroup;
submitted = false;
add=false;
stock=false;
update=false;
newcake;
  cake= new CakesModel(null,null,null,'0',null,null,null,null,null);
  cakecard= new CakesModel(null,null,null,null,null,null,null,null,null);
  constructor( private cakeservice:CakeservicesService, private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder,private adminservice:AdminserviceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    console.log(this.id)

    this.cakeservice.getCake(this.id).subscribe((data)=>{
      this.cake=JSON.parse(JSON.stringify(data));
      this.cakecard=this.cake;
      console.log(this.cake)
  })

  this.registerForm = this.formBuilder.group({
    name: [this.cake.name, Validators.required],
    price: [this.cake.price, Validators.required],
    stock: [this.cake.stock, Validators.required],
    details: [this.cake.details, Validators.required],
    img: [this.cake.img, Validators.required]
      });

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
           
            console.log(this.cake)
            this.cake.rating='5';
            this.cake.quantity='1';
             this.adminservice.updateCake(this.id,this.cake);
             alert("Cake is Updated");
            
            this.router.navigate(['/admin/home/updatecake']) 
            // location.reload();
      
        }
      
        onReset() {
            this.submitted = false;
            this.registerForm.reset();
        }

}
