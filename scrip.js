const pTotal = document.querySelector("#precio-total");
const selectCantidad = document.querySelector("select");
const olLista = document.querySelector("#lista-productos");
const fieldsetProducto = document.querySelector("#contenedor-producto");

const PRODUCTO_1 = 500;
const NOMBRE_PRODUCTO_1 = "Pan"

const PRODUCTO_2 = 800;
const NOMBRE_PRODUCTO_2 = "Yogurt"

let precioProductoActual = PRODUCTO_1;
let nombreProductoActual = NOMBRE_PRODUCTO_1;

let precioTotal = 0;


function agregarproducto() {

    precioTotal = (precioProductoActual * selectCantidad.value) + precioTotal;
    pTotal.innerHTML = "Total es: $" + (precioTotal);
    olLista.innerHTML += ` <li> ${nombreProductoActual} (${selectCantidad.value})</li>`;

}

function pasarProducto() {
    fieldsetProducto.innerHTML = `
         <img src="https://th.bing.com/th/id/OIP.FSF85GHjG0qcxWd0_UHWzgHaHa?pid=ImgDet&rs=1"; alt="">
         <h1>Producto 2</h1>
         <p>Precio $800</p>
    `;
    precioProductoActual = PRODUCTO_2;
    nombreProductoActual =NOMBRE_PRODUCTO_2;
}
