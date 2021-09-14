import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Producto } from '../classes/producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: string;
  precio: number;
  resultArray = [];
  constructor() { }

  ngOnInit(): void {
    console.log("Inicializacion de agregar-productos");
  }

  

  agregarProductos(){
    let producto = new Producto();
    producto.nombre = this.producto;
    producto.precio = this.precio;
    let newproducto={
      "nombre":this.producto,
      "precio":this.precio,
    }
    this.resultArray.push(producto);
    console.log(this.resultArray);
    return this.resultArray;
  }

  limpiarCajas(){
    this.producto = "";
    this.precio = 0;
  }

  finalizarEjecutado(){
    alert('Orden enviada');
  }

}
