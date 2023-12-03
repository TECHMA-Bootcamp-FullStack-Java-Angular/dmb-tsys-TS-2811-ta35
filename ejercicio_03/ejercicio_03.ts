class Raices {
  private a: number
  private b: number
  private c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  public getDiscriminante(): number {
    return Math.pow(this.b, 2) - 4 * this.a * this.c
  }

  public tieneRaices(): boolean {
    return this.getDiscriminante() >= 0
  }

  public tieneRaiz(): boolean {
    return this.getDiscriminante() === 0
  }

  public calcular(): void {
    const discriminante = this.getDiscriminante()

    if (discriminante > 0) {
      const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a)
      const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a)
      console.log(`Las raíces son: ${raiz1} y ${raiz2}`)
    } else if (discriminante === 0) {
      const raiz = -this.b / (2 * this.a)
      console.log(`La única raíz es: ${raiz}`)
    } else {
      console.log('No existen soluciones reales.')
    }
  }

  public obtenerRaices(): void {
    this.tieneRaices()
      ? this.calcular()
      : console.log('No existen soluciones reales.')
  }

  public obtenerRaiz(): void {
    this.tieneRaiz()
      ? this.calcular()
      :console.log('No existen soluciones reales o hay más de una solución.')
  }
}


export const ecuacion1 = new Raices(1, -3, 2)
ecuacion1.obtenerRaices()

export const ecuacion2 = new Raices(1, -2, 1)
ecuacion2.obtenerRaiz()
