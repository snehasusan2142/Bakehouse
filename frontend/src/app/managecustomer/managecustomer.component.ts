import { Component, OnInit } from '@angular/core';
import {AdminserviceService} from '../adminservice.service'
import {CustomerModel} from './customer.model'
@Component({
  selector: 'app-managecustomer',
  templateUrl: './managecustomer.component.html',
  styleUrls: ['./managecustomer.component.css']
})
export class ManagecustomerComponent implements OnInit {

  constructor(private adminservice:AdminserviceService) { }
users:CustomerModel[]|any;
  ngOnInit(): void {
    this.adminservice.getcustomers().subscribe((data)=>{
      this.users= JSON.parse(JSON.stringify(data));  
      console.log(this.users)
  })
}
deleteUser(id){
  console.log(id)
  this.adminservice.deleteCustomer(id) ;
  location.reload();
}
}
