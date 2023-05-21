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

let elegirCantidad1= 0;

let precioTotal = 0;


const DESCUENTO_1= (10/100);
const DESCUENTO_2=(25/100);



function agregarproducto() {

    precioTotal = (precioProductoActual * selectCantidad.value) + precioTotal;
    pTotal.innerHTML = "Total es: $" + (precioTotal);
    olLista.innerHTML += ` <li> ${nombreProductoActual} (${selectCantidad.value})</li>
    `;

    switch (selectCantidad.value) {
        case "1":
            pTotal.innerHTML="El precio es:"+ (precioTotal);
            break
       case "3":
            pTotal.innerHTML= "Precio Total es $" + (( precioTotal)-((precioProductoActual * selectCantidad.value)* (DESCUENTO_1)));
            break;
        case "7":
            pTotal.innerHTML= "Precio Total es $" + (( precioTotal)-((precioProductoActual * selectCantidad.value)* (DESCUENTO_2)));
            break
        default:
            alert= "ERROR";
    } 
}

const DESCUENTO_3=(15/100);
const DESCUENTO_4=(30/100);





function pasarProducto() {
    fieldsetProducto.innerHTML = `
         <img src="https://th.bing.com/th/id/OIP.FSF85GHjG0qcxWd0_UHWzgHaHa?pid=ImgDet&rs=1"; alt="">
         <h1>Producto 2</h1>
         <p>Precio $800</p>
    `;
    precioProductoActual = PRODUCTO_2;
    nombreProductoActual = NOMBRE_PRODUCTO_2;

    switch (selectCantidad.value) {
        case "3":
            pTotal.innerHTML= "Precio Total es $" + (( precioTotal)-((precioProductoActual * selectCantidad.value)* (DESCUENTO_3)));
            break;
        case "7":
            pTotal.innerHTML= "Precio Total es $" + (( precioTotal)-((precioProductoActual * selectCantidad.value)* (DESCUENTO_4)));

        default:
            alert= "ERROR";
    } 

}
