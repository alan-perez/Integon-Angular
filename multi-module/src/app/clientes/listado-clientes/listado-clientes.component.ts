import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {ClientesService} from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

// private cs:ClientesService;

  constructor(private cs:ClientesService) { //Aplicando Dependency Injection
    // this.cs = new ClientesService();   //
   }

  clientes=[];

  ngOnInit(): void {
    this.clientes = this.cs.getClientes();
  }

}
