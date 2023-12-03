export class Pelicula {
        constructor(
                public titulo: string,
                public duracion: number,
                public edadMinima: number,
                public director: string
        ) {}
}

export class Espectador {
    constructor(
            public nombre: string,
            public edad: number,
            public dinero: number
    ) {}
}

export class Asiento {
    constructor(
            public fila: number,
            public columna: string
    ) {}
}

class Cine {
  private asientos: Asiento[][] = [];
  private peliculaActual: Pelicula;
  private precioEntrada: number;

  constructor(filas: number, columnas: number, titulo: string, duracion: number, edadMinima: number, director: string, precioEntrada: number) {
      this.inicializarAsientos(filas, columnas);
      this.peliculaActual = new Pelicula(titulo, duracion, edadMinima, director);
      this.precioEntrada = precioEntrada;
  }

  private inicializarAsientos(filas: number, columnas: number): void {
      for (let i = 1; i <= filas; i++) {
          const fila: Asiento[] = [];
          for (let j = columnas; j >= 1; j--) {
              const letraColumna = String.fromCharCode(64 + j);
              fila.push(new Asiento(i, letraColumna));
          }
          this.asientos.push(fila);
      }
  }

  public mostrarAsientosDisponibles(): void {
      console.log("Asientos disponibles:");
      for (let i = 0; i < this.asientos.length; i++) {
          const fila = this.asientos[i];
          const filaStr = fila.map(asiento => `💺[${asiento.fila}${asiento.columna}]`).join(' ');
          console.log(`Fila ${i + 1} ${filaStr}`);
      }
  }

  public venderEntrada(espectador: Espectador, fila: number, columna: string): void {
      const asiento = this.asientos[fila - 1].find(as => as.columna === columna);
      if (asiento) {
          if (espectador.edad >= this.peliculaActual.edadMinima && espectador.dinero >= this.precioEntrada) {
              console.log(`${espectador.nombre} ha comprado una entrada para ${this.peliculaActual.titulo} en el asiento ${fila}${columna}.`);
              espectador.dinero -= this.precioEntrada;
              this.asientos[fila - 1] = this.asientos[fila - 1].filter(as => as !== asiento);
          } else {
              console.log(`${espectador.nombre} no cumple con los requisitos para ver la película.`);
          }
      } else {
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

