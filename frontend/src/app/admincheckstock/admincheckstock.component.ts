import { Component, OnInit } from '@angular/core';
import {CakeservicesService} from '../cakeservices.service'
import {CakesModel} from '../user-home/cakes.model'
@Component({
  selector: 'app-admincheckstock',
  templateUrl: './admincheckstock.component.html',
  styleUrls: ['./admincheckstock.component.css']
})
export class AdmincheckstockComponent implements OnInit {

  constructor(private cakeservices:CakeservicesService) { }
cakes:CakesModel[];
len;
  ngOnInit(): void {
    this.cakeservices.getCakes().subscribe((data)=>{
		  this.cakes= JSON.parse(JSON.stringify(data));  
      console.log(this.cakes)   
      this.len=this.cakes.length;
      
  			})
  }

}
