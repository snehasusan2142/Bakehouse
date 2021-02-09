import { Component, OnInit } from '@angular/core';
import { AdminserviceService} from '../adminservice.service';
import {OrderModel} from '../orderspage/order.model'
@Component({
  selector: 'app-orderspage',
  templateUrl: './orderspage.component.html',
  styleUrls: ['./orderspage.component.css']
})
export class OrderspageComponent implements OnInit {
  orders:OrderModel[]|any;
  time;
  id;
  hidden=true;
  constructor( public adminservice:AdminserviceService) { }
  ngOnInit(): void {
    // setTimeout(() => {
    //   window.location.reload();
    // }, 10000); //
    this.adminservice.getorders().subscribe((data)=>{
		  this.orders= JSON.parse(JSON.stringify(data));  
     
  			})
  }

  
  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }
ready(id) {
 alert("Shipped..Please Check mail \nemail:abakehouse@gmail.com\n password:Admin@123");
 console.log(id)
 this.adminservice.orderready(id);

 this.adminservice.deleteorder(id);
 location.reload();
//  location.reload();
}
  delete(id){
    // console.log("in delete order"+id)
    this.adminservice.deleteorder(id);
    location.reload();
  }
}
