import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dato2:string ="dato de menu component";

  constructor() { }

  ngOnInit(): void {
  }

}
