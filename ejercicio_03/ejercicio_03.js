"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecuacion2 = exports.ecuacion1 = void 0;
var Raices = /** @class */ (function () {
    function Raices(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Raices.prototype.getDiscriminante = function () {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    };
    Raices.prototype.tieneRaices = function () {
        return this.getDiscriminante() >= 0;
    };
    Raices.prototype.tieneRaiz = function () {
        return this.getDiscriminante() === 0;
    };
    Raices.prototype.calcular = function () {
        var discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            var raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            var raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log("Las ra\u00EDces son: ".concat(raiz1, " y ").concat(raiz2));
        }
        else if (discriminante === 0) {
            var raiz = -this.b / (2 * this.a);
            console.log("La \u00FAnica ra\u00EDz es: ".concat(raiz));
        }
        else {
            console.log('No existen soluciones reales.');
        }
    };
    Raices.prototype.obtenerRaices = function () {
        this.tieneRaices()
            ? this.calcular()
            : console.log('No existen soluciones reales.');
    };
    Raices.prototype.obtenerRaiz = function () {
        this.tieneRaiz()
            ? this.calcular()
            : console.log('No existen soluciones reales o hay más de una solución.');
    };
    return Raices;
}());


exports.ecuacion1 = new Raices(1, -3, 2);
exports.ecuacion1.obtenerRaices();
exports.ecuacion2 = new Raices(1, -2, 1);
exports.ecuacion2.obtenerRaiz();
