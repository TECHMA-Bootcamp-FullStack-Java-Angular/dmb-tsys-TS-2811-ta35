var Libro = /** @class */ (function () {
    function Libro(ISBN, titulo, autor, numPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    Libro.prototype.getISBN = function () {
        return this.ISBN;
    };
    Libro.prototype.setISBN = function (ISBN) {
        this.ISBN = ISBN;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getNumPaginas = function () {
        return this.numPaginas;
    };
    Libro.prototype.setNumPaginas = function (numPaginas) {
        this.numPaginas = numPaginas;
    };
    Libro.prototype.toString = function () {
        return "El libro con ISBN ".concat(this.ISBN, " creado por ").concat(this.autor, " tiene ").concat(this.numPaginas, " p\u00E1ginas.");
    };
    return Libro;
}());
//[X] Crear 2 objetos Libro con títulos y autores españoles
var libro1 = new Libro("978-84-204-6688-6", "Cien años de soledad", "Gabriel García Márquez", 432);
var libro2 = new Libro("978-84-9032-021-7", "Don Quijote de la Mancha", "Miguel de Cervantes", 928);
//[X] Mostrar los libros por pantalla
console.log(libro1.toString());
console.log(libro2.toString());
//[X] Indicar cuál de los 2 tiene más páginas
if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log("".concat(libro1.getTitulo(), " tiene m\u00E1s p\u00E1ginas."));
}
else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log("".concat(libro2.getTitulo(), " tiene m\u00E1s p\u00E1ginas."));
}
else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
}
