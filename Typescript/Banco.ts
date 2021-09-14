interface ICuenta{
    deposito():number;
    retiro():number;
    consultarSaldo():number;

}

class CuentaPersonal implements ICuenta{

}

class CuentaEmpresarial implements ICuenta{

}
