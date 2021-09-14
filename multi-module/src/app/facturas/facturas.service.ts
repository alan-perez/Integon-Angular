import { Injectable } from '@angular/core';
import {Factura} from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor() { }

  facturas:Factura[] = [
    {
      "id":6,
      "fecha":'8/9/2021',
      "cliente":2,
      "monto":21545

    }
  ];

  agregarFactura(f:Factura):void{
    this.facturas.push(f);
  }

  buscarFactura(id:number):Factura{
    let facturaEncontrada:Factura;
  this.facturas.forEach((factura)=>{
    if(factura.id == id){
      facturaEncontrada = factura;
    }
  });
return facturaEncontrada;
}

obtenerFacturas(){
  return this.facturas;
}
}
