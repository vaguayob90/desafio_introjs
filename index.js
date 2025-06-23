precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidad = 0
cantidadSpan = document.querySelector(".cantidad")
function actualizarCantidad() {
  cantidadSpan.innerHTML = cantidad
}
actualizarCantidad()

valorTotalSpan = document.querySelector(".valor-total")
function actualizarValorTotal() {
  valorTotalSpan.innerHTML = precio * cantidad
}

sumarBtn = document.querySelector("#sumar")
sumarBtn.onclick = function () {
  cantidad++
  actualizarCantidad()
  actualizarValorTotal()
}

restarBtn = document.querySelector("#restar")
restarBtn.onclick = function () {
  if (cantidad === 0) return
  cantidad--
  actualizarCantidad()
  actualizarValorTotal()
}