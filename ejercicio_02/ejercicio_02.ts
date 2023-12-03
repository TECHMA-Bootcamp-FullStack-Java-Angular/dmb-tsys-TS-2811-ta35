export class Libro {
  private ISBN: string;
  private titulo: string;
  private autor: string;
  private numPaginas: number;

  constructor(ISBN: string, titulo: string, autor: string, numPaginas: number) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
  }

  public getISBN(): string {
      return this.ISBN;
  }

  public setISBN(ISBN: string): void {
      this.ISBN = ISBN;
  }

  public getTitulo(): string {
      return this.titulo;
  }

  public setTitulo(titulo: string): void {
      this.titulo = titulo;
  }

  public getAutor(): string {
      return this.autor;
  }

  public setAutor(autor: string): void {
      this.autor = autor;
  }

  public getNumPaginas(): number {
      return this.numPaginas;
  }

  public setNumPaginas(numPaginas: number): void {
      this.numPaginas = numPaginas;
  }


  public toString(): string {
      return `El libro con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
  }
}

//[X] Crear 2 objetos Libro con títulos y autores españoles
const libro1: Libro = new Libro("978-84-204-6688-6", "Cien años de soledad", "Gabriel García Márquez", 432);
const libro2: Libro = new Libro("978-84-9032-021-7", "Don Quijote de la Mancha", "Miguel de Cervantes", 928);


//[X] Mostrar los libros por pantalla
console.log(libro1.toString());
console.log(libro2.toString());

//[X] Indicar cuál de los 2 tiene más páginas
if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
  console.log(`${libro1.getTitulo()} tiene más páginas.`);
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
  console.log(`${libro2.getTitulo()} tiene más páginas.`);
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
}
