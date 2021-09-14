import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() productosAMostrar = [];
  @Output() finalizar = new EventEmitter(); 

  ngOnInit(): void {
    console.log("Inicializacion de lista-productos");
  }

  ngOnChanges(changes: SimpleChanges){
    for(const propiedad in changes)
    {
      console.log(`Propiedad modificada: ${propiedad}`);
    }
    console.log('Hubo cambios en alguna propiedad');
  }
}
