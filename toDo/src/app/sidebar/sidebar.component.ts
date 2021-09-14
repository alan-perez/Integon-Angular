import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  dato1:string ="dato de sidebar component";
  estaSeleccionado:boolean = true;

 //controla las clases que se van a aplicar para quien este configurando mis classes
  currentClasses ={
    seleccionado:true,
    otro:true
  };

  constructor() { }

  checkboxChanged(){
    console.log("se activo el evento")
  }

  ngOnInit(): void {
  }

}
