import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  constructor(private http:HttpClient){  }
//display customers on manage customer page
getcustomers(){
  return this.http.get("http://localhost:3000/admin/customers");
}

  //display on order page
  getorders(){
    return this.http.get("http://localhost:3000/admin/orders");
  }
  //getting cakes from db
  getCakes(){
    return this.http.get("http://localhost:3000/");
  }
  //posting cake to db
addCake(item){
    // console.log("imin admin add acke to app.js..")
   return this.http.post("http://localhost:3000/admin/addcake",{"item":item})
   .subscribe(data=>{
     console.log(data)
   })
}

updateCake(id,updatecake){
  // console.log("imin admin update cake to app.js..")
 return this.http.put("http://localhost:3000/admin/home/updatecake/"+id,{"item":updatecake})
 .subscribe(data=>{
   console.log(data)
 })
}

delete(id){
  // console.log("imin admin update cake to app.js..")
  return this.http.delete("http://localhost:3000/admin/home/updatecake/"+id,id)
  .subscribe(data=>{
    console.log(data)
  })
}

deleteCustomer(userid){
  // console.log("imin admin update cake to app.js..")
  return this.http.delete("http://localhost:3000/admin/customers/"+userid)
  .subscribe(data=>{
    console.log(data)
  })
}

orderready(order){
  return this.http.post("http://localhost:3000/admin/customers/order/"+order,order)
  .subscribe(data=>{
    console.log(data)
  })
}

deleteorder(order){
  return this.http.delete("http://localhost:3000/admin/customers/order/"+order)
  .subscribe(data=>{
    console.log(data)
  })
}

}
