export default class Totalizador {
  constructor() {
    this.cantidad = 0;
  }
  ingresarItem() {
    this.cantidad += 1;
  }
  obtenerCantidad() {
    return this.cantidad;
  }
}

