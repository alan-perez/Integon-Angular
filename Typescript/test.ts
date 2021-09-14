"use strict"
let myBoolean: boolean = true;
let myNumber: number = 1234;
let myStringArray =["first","second","third"];
let flag =false;
let dato: any = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
type Animal = 'Cheetah' |'Lion'|'Turtle';
const prueba : Animal = "Turtle";
enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge };
let carro : Brands = Brands.Ford;

function SaludaAlUsuario():void{
    console.log('Hola Usuario');
}

let marca = "Bachoco";

// function SumaDeNumeros (num1:number,num2:number):number;
// function SumaDeNumeros(num1:number[]):number;

// function SumaDeNumeros (num1:number,num2?:number):number{
//   let suma = 0;
//   if(Array.isArray(num1)){

//   }
//   return suma;
// }

function add(a:string,b:string):string;
function add(a:string,b:string):number;

function add(a:any,b:any):any{
    return a+b;
}

class Persona{
    private nombre:string = '';
    private apellidoPaterno:string = '';
    private apellidoPMaterno:string = '';


    constructor(n:string, ap:string,am:string,private mayorDeEdad:boolean){
        this.nombre = n;
        this.apellidoPMaterno = ap;
        this.apellidoPMaterno =am;
    }

    getINE(){
        return this.mayorDeEdad?"Puede tramitar el INE":"No puede asignarsele INE";
        
    }
}

interface FiguraGeometrica{
    color:string;
    diametro?:number;
    calcularArea():number;
}

class Rectangulo implements FiguraGeometrica{
    private base:number=0;
    private altura:number=0;
    color:string ="Rojo";
    calcularArea(){
        return this.base*this.altura;
    }
}

class Triangulo implements FiguraGeometrica{
    private base:number=0;
    private altura:number=0;
    color:string ="Verde";
    calcularArea(){
        return (this.base*this.altura)/2;
    }
}

class TrianguloIsosceles extends Triangulo{

}

class TrianguloEscaleno extends Triangulo{
    
}


class Circulo implements FiguraGeometrica{
    private base:number=0;
    private altura:number=0;
    color:string ="Azul";
    diametro:number=10;
    calcularArea(){
        return Math.PI*Math.pow(this.diametro/2,2);
    }
}

let miTriangulo:TrianguloEscaleno = new TrianguloEscaleno();
miTriangulo.color ="verde";
miTriangulo.calcularArea();



