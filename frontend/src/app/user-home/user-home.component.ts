import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import{LoginserviceService} from '../loginservice.service'

import { CakeservicesService } from '../cakeservices.service';

import {CakesModel} from './cakes.model'
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  styles: [
		`
		
			.heart {
				position: relative;
				display: inline-block;
				font-size: 1.7rem;
				color: #d3d3d3;
			}
			.full {
				color: red;
			}
			.half {
				position: absolute;
				display: inline-block;
				overflow: hidden;
				color: red;
			}
			.bad {
			color: yellow;
		}
	
		`
	]
})

export class UserHomeComponent implements OnInit {
	empty=false;
	currentRate=0;
	quantity=1;
	totalamount=0;
	cakes:CakesModel[];
	cartcakes=[];
	locakes;
	conf;
	fb=false;
	fbmsg=""
	user=""
	y;
	x=true;
	
	 constructor(public cakeservice:CakeservicesService,private router: Router,public log:LoginserviceService) { }
		ngOnInit(): void {
    	this.cakeservice.getCakes().subscribe((data)=>{
		  this.cakes= JSON.parse(JSON.stringify(data));  
		  console.log(this.cakes)
		 this.locakes=localStorage.getItem('CAKES');

  			})
  		 }


 	 moveToCart(item) {
		if(item.stock==0){
			alert("Cake Out of stock")
		}
		else{

		this.y=this.countInArray(this.cartcakes,item)
		if(this.y>=1){
			this.x=confirm("Item already in cart...\n Do you want to add cake again?")
		}
		if(this.x){
			
			
			this.cartcakes.push(item);
			
			
			if(this.cartcakes.length!=0)
				{
					this.empty=true;
					
					let total = 0;
					for (var i = 0; i < this.cartcakes.length; i++) {
						
						if (this.cartcakes[i].price) {
							console.log(this.cartcakes[i].quantity)
							total += this.cartcakes[i].price * this.cartcakes[i].quantity;
							this.totalamount = total;
									}
								}
				}			
			}
		}

			console.log("in cart fn")
			console.log(item)
			console.log("in checkoutcakes")
			console.log(this.cartcakes)
		}

countInArray(array, what) {
				var count = 0;
				for (var i = 0; i < array.length; i++) {
					if (array[i] === what) {
						count++;
					}
				}
				return count;
			}
			


getTotal(){
	let total = 0;
			for (var i = 0; i < this.cartcakes.length; i++) {
				if (this.cartcakes[i].price) {
					total += this.cartcakes[i].price * this.cartcakes[i].quantity;
					this.totalamount = total;
				}
			}
		}
	


DeletefromCart(cake){
		this.cartcakes= this.arrayRemove(this.cartcakes, cake);
		// console.log("Im empty value before"+this.empty)
		// console.log(this.cartcakes.length)
		if(this.cartcakes.length==0){
				this.empty=false;
			// console.log("Im empty value after"+this.empty)
				}	
				this.totalamount=0;
	// console.log(this.cartcakes)
	}

 
arrayRemove(arr, value) { 
    
		return arr.filter(function(ele){ 
		return ele != value; 
		});
	}

checkout(){
console.log("im in checkout")
this.conf=confirm("Checking Out..If you want to add more items to cart please cancel")
if(this.conf){
	this.cakeservice.checkoutcake(this.cartcakes,this.totalamount);
	console.log(this.cartcakes)
}
else{
	this.router.navigate(['/home']);
}

	// console.log(this.cartcakes)
}
fn1(){
	this.fb=true;
}
fbsubmit(){
	console.log(this.fbmsg)
	this.log.sendfb(this.fbmsg,this.user);
}

}
