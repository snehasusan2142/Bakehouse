import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  name = 'Angular';
  opened=true;
  menuList: any;
  selected: any = {};
  constructor() { 
    this.menuList = [ {
      name: "Menu 2", route: "menulink2", subMenu: [
        { label: "Sub Menu 1", route: "submenulink1" },
        { label: "Sub Menu 2", route: "submenulink2" }
      ]
    }
    ]
  
}

select(type, item, $event) {
  this.selected[type] = (this.selected[type] === item ? null : item);
  console.log('Item: ', item);
  $event ? $event.stopPropagation() : null;
}
isActive(type, item) {
  return this.selected[type] === item;
}

  ngOnInit(): void {
  }

}
