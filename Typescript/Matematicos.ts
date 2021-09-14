function suma(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function resta(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

function multiplica(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function divide(numero1: number, numero2: number): number {
    return numero1 / numero2;
}

const mayorDeDosNumeros = (numero1: number, numero2: number):number => {
    let mayor = 0;

    if (numero1 > numero2) {
        mayor = numero1;
    }
    if (numero2 > numero1) {
        mayor = numero2;
    }

    return mayor;

}

enum Role  {'Admin','User','SuperUser'};

type Department = 'MKT'|'Finanzas'|'HR';


function AgregarUsuario(nombre:string,rol:Role, depto: Department):void{
console.log('Usuario Agregado')
}

AgregarUsuario('Alan',Role.Admin,'HR');