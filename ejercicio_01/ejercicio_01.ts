interface Entregable {
  entregar(): void
  devolver(): void
  isEntregado(): boolean
  compareTo(a: Entregable): number
}

class Serie implements Entregable {
  private titulo: string
  private numeroTemporadas: number
  private entregado: boolean
  private genero: string
  private creador: string

  constructor(titulo: string, creador: string) {
    this.titulo = titulo
    this.numeroTemporadas = 3
    this.entregado = false
    this.genero = 'Sin género'
    this.creador = creador
  }

  public entregar(): void {
    this.entregado = true
  }

  public devolver(): void {
    this.entregado = false
  }

  public isEntregado(): boolean {
    return this.entregado
  }

  public compareTo(a: Entregable): number {
    if (a instanceof Serie) {
      return this.numeroTemporadas - (a as Serie).numeroTemporadas
    }
    return 0
  }

  public toString(): string {
    return `Serie: ${this.titulo},
     Temporadas: ${this.numeroTemporadas},
     Género: ${this.genero},
     Creador: ${this.creador},
     Entregado: ${this.entregado}`
  }
}

class Videojuego implements Entregable {
  private titulo: string
  private horasEstimadas: number
  private entregado: boolean
  private genero: string
  private compania: string

  constructor(
    titulo: string,
    horasEstimadas: number,
    genero: string,
    compania: string
  ) {
    this.titulo = titulo
    this.horasEstimadas = horasEstimadas || 10
    this.entregado = false
    this.genero = genero || 'Sin género'
    this.compania = compania || 'Sin compañía'
  }

  public entregar(): void {
    this.entregado = true
  }

  public devolver(): void {
    this.entregado = false
  }

  public isEntregado(): boolean {
    return this.entregado
  }

  public compareTo(a: Entregable): number {
    if (a instanceof Videojuego) {
      return this.horasEstimadas - (a as Videojuego).horasEstimadas
    }
    return 0
  }

  public toString(): string {
    return `Videojuego: ${this.titulo},
      Horas estimadas: ${this.horasEstimadas},
      Género: ${this.genero},
      Compañía: ${this.compania},
      Entregado: ${this.entregado}`
  }
}


//[X]  Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada uno
const series: Serie[] = [
  new Serie('Patria', 'Félix Viscarret, Óscar Pedraza'),
  new Serie('La casa de papel', 'Álex Pina'),
  new Serie('Stranger Things', 'The Duffer Brothers'),
  new Serie('Breaking Bad', 'Vince Gilligan'),
  new Serie('The Mandalorian', 'Jon Favreau'),
]

const videojuegos: Videojuego[] = [
  new Videojuego('The Legend of Zelda: Breath of the Wild',50,'Aventura','Nintendo'),
  new Videojuego('FIFA 22', 15, 'Deportes', 'EA Sports'),
  new Videojuego('Cyberpunk 2077', 60, 'Rol', 'CD Projekt'),
  new Videojuego("Assassin's Creed Valhalla", 40, 'Acción', 'Ubisoft'),
  new Videojuego('The Last of Us Part II', 30, 'Aventura', 'Naughty Dog'),
]

//[X] Entrega algunos Videojuegos y Series con el método entregar().
series[0].entregar()
videojuegos[1].entregar()

//[X] Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos, devuélvelos.
console.log(`Series entregadas: ${series.filter( elem => elem.isEntregado()).length}`)
console.log(`Videojuegos entregados: ${videojuegos.filter( elem =>  elem.isEntregado()).length }`)

//[X] Mostrar en pantalla la Serie y el Videojuego con más temporadas y horas estimadas
export const serieMasTemporadas = series.reduce((prev, current) =>  current.compareTo(prev) > 0 ? current : prev )
export const videojuegoMasHoras = videojuegos.reduce((prev, current) =>  current.compareTo(prev) > 0 ? current : prev)

console.log('Serie con más temporadas: ', serieMasTemporadas.toString())
console.log(  'Videojuego con más horas estimadas: ', videojuegoMasHoras.toString())
