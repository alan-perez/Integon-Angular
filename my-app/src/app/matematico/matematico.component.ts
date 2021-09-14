import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  operacion: number = 1;
  resultado: number;
  userName: string = "";
  operaciones:string[]=['Sumar','Restar','Multiplicar','Dividir']
  limpiaCajasEjecutado() {
    alert('Alguien disparo el evento limpia cajas');
  }


  constructor() { }

  ngOnInit(): void {
  }

  calculate() {
    switch (this.operacion) {
      case 1: {
        this.resultado = +this.numero1 + +this.numero2
        console.log(this.resultado);
        break;
      }
      case 2: {
        this.resultado = this.numero1 - this.numero2;
        console.log(this.resultado);
        break;
      }
      case 3: {
        this.resultado = this.numero1 * this.numero2;
        console.log(this.resultado);
        break;
      }
      case 4: {
        this.resultado = this.numero1 / this.numero2;
        console.log(this.resultado);


        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
  printValue() {
    console.log(this.numero1, this.numero2, this.operacion)
  }


}
