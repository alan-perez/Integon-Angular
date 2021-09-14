"use strict";
let myBoolean = true;
let myNumber = 1234;
let myStringArray = ["first", "second", "third"];
let flag = false;
let dato = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
const prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
let carro = Brands.Ford;
function SaludaAlUsuario() {
    console.log('Hola Usuario');
}
let marca = "Bachoco";
function add(a, b) {
    return a + b;
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoPMaterno = '';
        this.nombre = n;
        this.apellidoPMaterno = ap;
        this.apellidoPMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarsele INE";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Verde";
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
class TrianguloIsosceles extends Triangulo {
}
class TrianguloEscaleno extends Triangulo {
}
class Circulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Azul";
        this.diametro = 10;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    }
}
let miTriangulo = new TrianguloEscaleno();
miTriangulo.color = "verde";
miTriangulo.calcularArea();
