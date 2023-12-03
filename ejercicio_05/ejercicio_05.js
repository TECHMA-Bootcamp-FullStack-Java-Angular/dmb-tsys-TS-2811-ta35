class Pelicula {
    constructor(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
}
class Espectador {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
}
class Asiento {
    constructor(fila, columna) {
        this.fila = fila;
        this.columna = columna;
    }
}
class Cine {
    constructor(filas, columnas, titulo, duracion, edadMinima, director, precioEntrada) {
        this.asientos = [];
        this.inicializarAsientos(filas, columnas);
        this.peliculaActual = new Pelicula(titulo, duracion, edadMinima, director);
        this.precioEntrada = precioEntrada;
    }
    inicializarAsientos(filas, columnas) {
        for (let i = 1; i <= filas; i++) {
            const fila = [];
            for (let j = columnas; j >= 1; j--) {
                const letraColumna = String.fromCharCode(64 + j);
                fila.push(new Asiento(i, letraColumna));
            }
            this.asientos.push(fila);
        }
    }
    mostrarAsientosDisponibles() {
        console.log("Asientos disponibles:");
        for (let i = 0; i < this.asientos.length; i++) {
            const fila = this.asientos[i];
            const filaStr = fila.map(asiento => `💺[${asiento.fila}${asiento.columna}]`).join(' ');
            console.log(`Fila ${i + 1} ${filaStr}`);
        }
    }
    venderEntrada(espectador, fila, columna) {
        const asiento = this.asientos[fila - 1].find(as => as.columna === columna);
        if (asiento) {
            if (espectador.edad >= this.peliculaActual.edadMinima && espectador.dinero >= this.precioEntrada) {
                console.log(`${espectador.nombre} ha comprado una entrada para ${this.peliculaActual.titulo} en el asiento ${fila}${columna}.`);
                espectador.dinero -= this.precioEntrada;
                this.asientos[fila - 1] = this.asientos[fila - 1].filter(as => as !== asiento);
            }
            else {
                console.log(`${espectador.nombre} no cumple con los requisitos para ver la película.`);
            }
        }
        else {
            console.log(`El asiento ${fila}${columna} no existe.`);
        }
    }
}
// Crear un cine y realizar algunas operaciones
const cine = new Cine(8, 9, "El Codigo Maldito", 120, 12, "Jose Marin", 10);
const espectador1 = new Espectador("David", 20, 15);
const espectador2 = new Espectador("Manel", 16, 8);
const espectador3 = new Espectador("Alejandro", 25, 12);
cine.mostrarAsientosDisponibles();
console.log("-".repeat(50));
cine.venderEntrada(espectador1, 5, "D");
cine.venderEntrada(espectador2, 3, "B");
cine.venderEntrada(espectador3, 2, "I");
console.log("-".repeat(50));
cine.mostrarAsientosDisponibles();
