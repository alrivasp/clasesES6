"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cliente = new _cliente["default"]('Alvaro');
var impuestos = new _impuestos["default"]();
impuestos.monto_bruto_anual = 100000;
impuestos.deducciones = 20000;
cliente._impuestos = impuestos;
console.log(cliente.calcularImpuesto());