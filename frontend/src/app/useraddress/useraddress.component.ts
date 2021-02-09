import { Component, OnInit } from '@angular/core';
import { CakeservicesService } from '../cakeservices.service';
import {Addresss} from '../useraddress/address'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css']
})
export class UseraddressComponent implements OnInit {
  submitted = false;
  public checkoutcakes;
  public len;
  public checkoutdetails=[];
  model= new Addresss(null,null,null,null,null,null,null,null);
 totalamt;
  constructor(public cakeservice:CakeservicesService,private router: Router) { 
    this.checkoutcakes=cakeservice.getcheckoutcake()[0];
  this.totalamt=cakeservice.getcheckoutcake()[1];
  // localStorage.setItem('CAKES',this.checkoutcakes);
    console.log(this.checkoutcakes)
    if(this.checkoutcakes.length!=null){
     this.len=true;
    }
    else{
      this.len=false;
    }
    // console.log("im in adress ts")
    // console.log(this.checkoutcakes)
  }
  ngOnInit(): void {
 
  }
  onSubmit() { 
  
    this.submitted = true; 
    this.checkoutdetails.push(this.model.name,this.model.email,this.model.phone,this.model.add1,this.model.add2,this.model.city,this.model.zip,this.model.state,)
  // console.log(this.checkoutdetails);
  // console.log(this.checkoutcakes)

  this.cakeservice.checkoutall(this.checkoutdetails,this.checkoutcakes)

  this.checkoutdetails=null;
  this.checkoutcakes=null;
  console.log("after service call")
  console.log(this.checkoutcakes)
  this.router.navigate(['/home/adrs/payementsuccess']);
 

}

}
