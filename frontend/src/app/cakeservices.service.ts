import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CakeservicesService {

  private cartitem={};
  private totalamt=0;

  constructor(private http:HttpClient){  }
  //reead
  getCakes(){
    return this.http.get("http://localhost:3000/");
  }
  getCake(id){
    return this.http.get("http://localhost:3000/cakes/"+id);
  }
  //passing from home page to checkout page
  checkoutcake(item,amt){
    console.log("lol im here")
    this.cartitem=item;
    this.totalamt=amt;
    
  }
  getcheckoutcake(){
    return [this.cartitem,this.totalamt]
  }

  //passing from checkout to db
  
  //add
 checkoutall(item,cakes){
   console.log("imin service checkout to app...")
  return this.http.post("http://localhost:3000/cart/",{"item":item,"cakes":cakes})
  .subscribe(data=>{
    console.log(data)
  })
}


}  