export default class Totalizador {
    constructor() {
        this.cantidad = 0;
        this.precio = 0;
}
    ingresarItem() {
    this.cantidad += 1;
}
    obtenerCantidad() {
    return this.cantidad;
}

    setPrecio(precio) {
    this.precio = precio;
}

    obtenerPrecio() {
        return this.precio;
    }
}

