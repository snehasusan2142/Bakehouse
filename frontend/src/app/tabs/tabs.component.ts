import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TabsComponent implements OnInit {
links=["p1","p2","p3"]

  constructor() { }

  ngOnInit(): void {
  }

}
