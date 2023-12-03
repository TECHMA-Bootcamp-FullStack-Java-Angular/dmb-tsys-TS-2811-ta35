class Persona {
    constructor(
        public nombre: string,
        public edad: number,
        public sexo: string
    ) {}

    public hacerNovillos(): void {
          Math.random() < 0.5
            ? console.log(`${this.nombre} hace novillos.`)
            : console.log(`${this.nombre} asiste a clase.`);
    }
}

class Estudiante extends Persona {
    constructor(
        nombre: string,
        edad: number,
        sexo: string,
        public calificacion: number
    ) {
        super(nombre, edad, sexo);
    }
}

class Profesor extends Persona {
    constructor(
        nombre: string,
        edad: number,
        sexo: string,
        public materia: string
    ) {
        super(nombre, edad, sexo);
    }

    public estaDisponible(): boolean {
        return Math.random() >= 0.2;
    }
}

class Aula {
    private alumnos: Estudiante[] = [];
    private profesor: Profesor;

    constructor(
        public id: number,
        public capacidadMaxima: number,
        public materia: string
    ) {
        this.profesor = new Profesor("Profesor", 35, "Masculino", materia);
        this.generarAlumnos();
    }

    private generarAlumnos(): void {
        for (let i = 0; i < this.capacidadMaxima; i++) {

            const nombre = `Estudiante${i + 1}`;
            const edad = Math.floor(Math.random() * 20) + 18;
            const sexo = Math.random() < 0.5 ? "Masculino" : "Femenino";
            const calificacion = Math.floor(Math.random() * 11);
            const estudiante = new Estudiante(nombre, edad, sexo, calificacion);

            this.alumnos.push(estudiante);
        }
    }

    public puedeDarClase(): boolean {
        const porcentajeAsistencia = this.calcularPorcentajeAsistencia();
        return (
            this.profesor.estaDisponible() &&
            this.profesor.materia === this.materia &&
            porcentajeAsistencia > 0.5
        );
    }

    private calcularPorcentajeAsistencia(): number {
        const asistentes = this.alumnos.filter((estudiante) => estudiante.hacerNovillos);
        return asistentes.length / this.capacidadMaxima;
    }

    public mostrarNotas(): void {
        const aprobados = this.alumnos.filter((estudiante) => estudiante.calificacion >= 5);

        const aprobadosMasculinos = aprobados.filter((estudiante) => estudiante.sexo === "Masculino");
        const aprobadosFemeninos = aprobados.filter((estudiante) => estudiante.sexo === "Femenino");

        console.log(`👨‍🎓 Alunnos aprovados: ${aprobadosMasculinos.length}`);
        console.log(`👩‍🎓 Alumnas aprovadas: ${aprobadosFemeninos.length}`);
    }
}


export const aulaMatematicas = new Aula(1, 30, "Matemáticas");

aulaMatematicas.puedeDarClase()
    ? (console.log("Se puede dar clase en el aula de Matemáticas."), aulaMatematicas.mostrarNotas())
    : console.log("No se puede dar clase en el aula de Matemáticas.");
