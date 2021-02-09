import { Component, OnInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import {LoginserviceService} from '../loginservice.service'
import {fbModel} from '../home/feedback.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private log:LoginserviceService) { }
  fbs:fbModel[];
  ngOnInit(): void {

    this.log.getfb().subscribe((data)=>{
		  this.fbs= JSON.parse(JSON.stringify(data));  
		  console.log(this.fbs)

  			})
  }

}
