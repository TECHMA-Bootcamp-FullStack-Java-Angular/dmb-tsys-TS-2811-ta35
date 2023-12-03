"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.aulaMatematicas = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    Persona.prototype.hacerNovillos = function () {
        Math.random() < 0.5
            ? console.log("".concat(this.nombre, " hace novillos."))
            : console.log("".concat(this.nombre, " asiste a clase."));
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, sexo, calificacion) {
        var _this = _super.call(this, nombre, edad, sexo) || this;
        _this.calificacion = calificacion;
        return _this;
    }
    return Estudiante;
}(Persona));
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, edad, sexo, materia) {
        var _this = _super.call(this, nombre, edad, sexo) || this;
        _this.materia = materia;
        return _this;
    }
    Profesor.prototype.estaDisponible = function () {
        return Math.random() >= 0.2;
    };
    return Profesor;
}(Persona));
var Aula = /** @class */ (function () {
    function Aula(id, capacidadMaxima, materia) {
        this.id = id;
        this.capacidadMaxima = capacidadMaxima;
        this.materia = materia;
        this.alumnos = [];
        this.profesor = new Profesor("Profesor", 35, "Masculino", materia);
        this.generarAlumnos();
    }
    Aula.prototype.generarAlumnos = function () {
        for (var i = 0; i < this.capacidadMaxima; i++) {
            var nombre = "Estudiante".concat(i + 1);
            var edad = Math.floor(Math.random() * 20) + 18;
            var sexo = Math.random() < 0.5 ? "Masculino" : "Femenino";
            var calificacion = Math.floor(Math.random() * 11);
            var estudiante = new Estudiante(nombre, edad, sexo, calificacion);
            this.alumnos.push(estudiante);
        }
    };
    Aula.prototype.puedeDarClase = function () {
        var porcentajeAsistencia = this.calcularPorcentajeAsistencia();
        return (this.profesor.estaDisponible() &&
            this.profesor.materia === this.materia &&
            porcentajeAsistencia > 0.5);
    };
    Aula.prototype.calcularPorcentajeAsistencia = function () {
        var asistentes = this.alumnos.filter(function (estudiante) { return estudiante.hacerNovillos; });
        return asistentes.length / this.capacidadMaxima;
    };
    Aula.prototype.mostrarNotas = function () {
        var aprobados = this.alumnos.filter(function (estudiante) { return estudiante.calificacion >= 5; });
        var aprobadosMasculinos = aprobados.filter(function (estudiante) { return estudiante.sexo === "Masculino"; });
        var aprobadosFemeninos = aprobados.filter(function (estudiante) { return estudiante.sexo === "Femenino"; });
        console.log("👨‍🎓 Alunnos aprovados: ".concat(aprobadosMasculinos.length));
        console.log("👩‍🎓 Alumnas aprovadas: ".concat(aprobadosFemeninos.length));
    };
    return Aula;
}());
exports.aulaMatematicas = new Aula(1, 30, "Matemáticas");
exports.aulaMatematicas.puedeDarClase()
    ? (console.log("Se puede dar clase en el aula de Matemáticas."), exports.aulaMatematicas.mostrarNotas())
    : console.log("No se puede dar clase en el aula de Matemáticas.");
