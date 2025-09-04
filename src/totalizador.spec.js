import Totalizador from "./totalizador.js";

describe("Totalizador - Cantidad de items", () => {
  it("inicia con cantidad 0", () => {
    const t = new Totalizador();
    expect(t.obtenerCantidad()).toEqual(0);
  });


  it("aumenta en 1 al ingresar un item", () => {
    const t = new Totalizador();
    t.ingresarItem();
    expect(t.obtenerCantidad()).toEqual(1);
  });

  it("suma correctamente varios items", () => {
  const t = new Totalizador();
  t.ingresarItem();
  t.ingresarItem();
  t.ingresarItem();
  expect(t.obtenerCantidad()).toEqual(3);
});


});