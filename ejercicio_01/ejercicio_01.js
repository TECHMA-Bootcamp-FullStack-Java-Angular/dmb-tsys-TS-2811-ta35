"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videojuegoMasHoras = exports.serieMasTemporadas = void 0;
var Serie = /** @class */ (function () {
    function Serie(titulo, creador) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = 'Sin género';
        this.creador = creador;
    }
    Serie.prototype.entregar = function () {
        this.entregado = true;
    };
    Serie.prototype.devolver = function () {
        this.entregado = false;
    };
    Serie.prototype.isEntregado = function () {
        return this.entregado;
    };
    Serie.prototype.compareTo = function (a) {
        if (a instanceof Serie) {
            return this.numeroTemporadas - a.numeroTemporadas;
        }
        return 0;
    };
    Serie.prototype.toString = function () {
        return "Serie: ".concat(this.titulo, ", Temporadas: ").concat(this.numeroTemporadas, ", G\u00E9nero: ").concat(this.genero, ", Creador: ").concat(this.creador, ", Entregado: ").concat(this.entregado);
    };
    return Serie;
}());
var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, horasEstimadas, genero, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas || 10;
        this.entregado = false;
        this.genero = genero || 'Sin género';
        this.compania = compania || 'Sin compañía';
    }
    Videojuego.prototype.entregar = function () {
        this.entregado = true;
    };
    Videojuego.prototype.devolver = function () {
        this.entregado = false;
    };
    Videojuego.prototype.isEntregado = function () {
        return this.entregado;
    };
    Videojuego.prototype.compareTo = function (a) {
        if (a instanceof Videojuego) {
            return this.horasEstimadas - a.horasEstimadas;
        }
        return 0;
    };
    Videojuego.prototype.toString = function () {
        return "Videojuego: ".concat(this.titulo, ",\n      Horas estimadas: ").concat(this.horasEstimadas, ",\n      G\u00E9nero: ").concat(this.genero, ",\n      Compa\u00F1\u00EDa: ").concat(this.compania, ",\n      Entregado: ").concat(this.entregado);
    };
    return Videojuego;
}());
//[X]  Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada uno
var series = [
    new Serie('Patria', 'Félix Viscarret, Óscar Pedraza'),
    new Serie('La casa de papel', 'Álex Pina'),
    new Serie('Stranger Things', 'The Duffer Brothers'),
    new Serie('Breaking Bad', 'Vince Gilligan'),
    new Serie('The Mandalorian', 'Jon Favreau'),
];
var videojuegos = [
    new Videojuego('The Legend of Zelda: Breath of the Wild', 50, 'Aventura', 'Nintendo'),
    new Videojuego('FIFA 22', 15, 'Deportes', 'EA Sports'),
    new Videojuego('Cyberpunk 2077', 60, 'Rol', 'CD Projekt'),
    new Videojuego("Assassin's Creed Valhalla", 40, 'Acción', 'Ubisoft'),
    new Videojuego('The Last of Us Part II', 30, 'Aventura', 'Naughty Dog'),
];
//[X] Entrega algunos Videojuegos y Series con el método entregar().
series[0].entregar();
videojuegos[1].entregar();
//[X] Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos, devuélvelos.
console.log("Series entregadas: ".concat(series.filter(function (elem) { return elem.isEntregado(); }).length));
console.log("Videojuegos entregados: ".concat(videojuegos.filter(function (elem) { return elem.isEntregado(); }).length));
//[X] Mostrar en pantalla la Serie y el Videojuego con más temporadas y horas estimadas
exports.serieMasTemporadas = series.reduce(function (prev, current) { return current.compareTo(prev) > 0 ? current : prev; });
exports.videojuegoMasHoras = videojuegos.reduce(function (prev, current) { return current.compareTo(prev) > 0 ? current : prev; });
console.log('Serie con más temporadas: ', exports.serieMasTemporadas.toString());
console.log('Videojuego con más horas estimadas: ', exports.videojuegoMasHoras.toString());
