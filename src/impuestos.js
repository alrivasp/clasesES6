export default class Impuestos{
    constructor(){
        this._monto_bruto_anual = 0;
        this._deducciones = 0;
    }

    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    }

    set monto_bruto_anual(monto){
        this._monto_bruto_anual = monto;
    }

    get deducciones(){
        return this._deducciones;
    }
    set deducciones(monto){
        this._deducciones = monto
    }
}