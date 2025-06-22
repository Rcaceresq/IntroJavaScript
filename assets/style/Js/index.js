precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const PRECIO_BASE = 400000;

const spanPrecio   = document.querySelector('.precio-inicial');
const spanCantidad = document.querySelector('.cantidad');
const spanTotal    = document.querySelector('.valor-total');

let cantidad = 0;

spanPrecio.textContent = PRECIO_BASE.toLocaleString('es-CL');

function actualizarTotal() {
  const total = PRECIO_BASE * cantidad;
  spanTotal.textContent = total.toLocaleString('es-CL');
}

function incrementar() {
  cantidad++;
  spanCantidad.textContent = cantidad;
  actualizarTotal();
}

function disminuir() {
  if (cantidad === 0) return;
  cantidad--;
  spanCantidad.textContent = cantidad;
  actualizarTotal();
}

actualizarTotal();