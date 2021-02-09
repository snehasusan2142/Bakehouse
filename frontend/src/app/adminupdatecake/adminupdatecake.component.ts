import { Component, OnInit } from '@angular/core';
import { CakeservicesService } from '../cakeservices.service';
import {CakesModel} from '../user-home/cakes.model'
import {AdminserviceService} from '../adminservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminupdatecake',
  templateUrl: './adminupdatecake.component.html',
  styleUrls: ['./adminupdatecake.component.css']
})
export class AdminupdatecakeComponent implements OnInit {
	empty=false;
	currentRate=0;
	quantity=1;
	totalamount=0;
	cakes:CakesModel[]|any
	cartcakes=[];
	 constructor(public cakeservice:CakeservicesService,private adminservice:AdminserviceService,private router:Router) { }
		ngOnInit(): void {
    	this.cakeservice.getCakes().subscribe((data)=>{
		  this.cakes= JSON.parse(JSON.stringify(data));  
		  console.log(this.cakes)   
  			})
  		 }

deletecake(delcake){
	
	console.log("im in del")
	console.log(delcake._id)
	this.adminservice.delete(delcake._id)
	location.reload();
	
}

}
// from here i going to user single cake compo