let nombreCompleto = prompt("Ingresa tu Nombre Completo");
alert("Nombre ingresado: "+ nombreCompleto);

let numeroTelefonico = prompt("Ingresa tu numero para ponernos en contacto");
alert("Numero ingresado: "+ numeroTelefonico);

let lista=document.getElementById("varilla");

renderizarProductos();

function renderizarProductos() {
    for (const aerosol of aerosoles) {
        lista.innerHTML+=`<div class="card carta" style="width: 16rem; height: 25rem;">
        <div class="image-tarjeta">
            <img src="${aerosoles.imagen}" class="w-100 h-100 " alt="Pitanga">
        </div>
        <div class="card-body">
        <h5 class="card-title text-center">${aerosoles.nombre}</h5>
        <p class="card-text text-center">$${aerosoles.precio}</p>
        <a href="#" class="btn btn-primary botone">Comprar</a>
        </div>
    </div>`;
    }
    
}

