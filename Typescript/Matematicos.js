"use strict";
function suma(numero1, numero2) {
    return numero1 + numero2;
}
function resta(numero1, numero2) {
    return numero1 - numero2;
}
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
function divide(numero1, numero2) {
    return numero1 / numero2;
}
const mayorDeDosNumeros = (numero1, numero2) => {
    let mayor = 0;
    if (numero1 > numero2) {
        mayor = numero1;
    }
    if (numero2 > numero1) {
        mayor = numero2;
    }
    return mayor;
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["SuperUser"] = 2] = "SuperUser";
})(Role || (Role = {}));
;
function AgregarUsuario(nombre, rol, depto) {
    console.log('Usuario Agregado');
}
AgregarUsuario('Alan', Role.Admin, 'HR');
