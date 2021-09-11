import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

let cliente = new Cliente('Alvaro');
let impuestos = new Impuestos();

impuestos.monto_bruto_anual = 100000;
impuestos.deducciones = 20000;

cliente._impuestos = impuestos;

console.log(cliente.calcularImpuesto());
