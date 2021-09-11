export default class Cliente{
    constructor(nombre){
        this._nombre = nombre;
        this._impuestos = {};
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    calcularImpuesto(){
        let total = this._impuestos['_monto_bruto_anual'] - this._impuestos['_deducciones'];
        return ((total * 21) / 100);
    }
}