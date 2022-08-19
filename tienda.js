//Pedido de datos
let nombreCompleto = prompt("Ingresa tu Nombre Completo");
alert("Nombre ingresado: "+ nombreCompleto);

let numeroTelefonico = prompt("Ingresa tu numero para ponernos en contacto");
alert("Numero ingresado: "+ numeroTelefonico);

class Difusor {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

function difusorTextil() {
    productos.push(new Difusor(1, 'Bubbleum', 500, 'Imagenes/textil/textil.chicle.webp'));
    productos.push(new Difusor(2, 'Angel', 500, 'Imagenes/textil/textil.angel.jpg'));
    productos.push(new Difusor(3, 'CocoVai', 500, 'Imagenes/textil/textil.cocovai.jpg'));
    productos.push(new Difusor(4, 'Invictus', 500, 'Imagenes/textil/textil.invicus.png'));
    productos.push(new Difusor(5, 'Limon', 500, 'Imagenes/textil/textil.limon.jpg'));
    productos.push(new Difusor(6, 'Lola', 500, 'Imagenes/textil/textil.lola.jpg'));
    productos.push(new Difusor(7, 'OneMillon', 500, 'Imagenes/textil/textil.onemillion.jpg'));
    productos.push(new Difusor(8, 'Pula', 500, 'Imagenes/textil/textil.paula.jpg'));
    productos.push(new Difusor(9, 'Pitanga', 500, 'Imagenes/textil/textil.pitanga.jpg'));
}

//carrito

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//Arrays productos y carrito
const productos = [];
const carroDeCompras = [];

const contenedorTextiles = document.querySelector("#contenedor-textil")

const contenedorCarro = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

//Declaramos funciones

difusorTextil();
agregadoAlCarrito();
estructuraCarro();
dibujarCatalogoProductos();

function agregadoAlCarrito() {
    let elementoCarrito = new ElementoCarrito(
        new Difusor(1, 'Bubbleum', 500, 'Imagenes/textil/textil.chicle.webp')
        
    );

    carroDeCompras.push(elementoCarrito);
}


function estructuraCarro() {

    let sumaCarrito = 0;
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>$ ${elemento.producto.precio}</td>
                <td>$ ${elemento.producto.precio*elemento.cantidad}</td>
            `;

            contenedorCarritoCompras.append(renglonesCarrito);

            sumaCarrito+=elemento.cantidad*elemento.producto.precio;

            //evento del carrito
            let cantidadProductos = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            
            cantidadProductos.addEventListener("change", (e) => {
                let nuevaCantidad = e.target.value;
                elemento.cantidad = nuevaCantidad;
                dibujarCarrito();
            });

        }
    );

  