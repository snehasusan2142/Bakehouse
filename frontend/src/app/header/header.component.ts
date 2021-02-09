import { Component, OnInit } from '@angular/core';
import{LoginserviceService} from '../loginservice.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public log:LoginserviceService) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('token')
  localStorage.removeItem('token_admin')
}
}
