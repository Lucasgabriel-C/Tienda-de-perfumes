let nombreCompleto = prompt("Ingresa tu Nombre Completo");
alert("Nombre ingresado: "+ nombreCompleto);

let numeroTelefonico = prompt("Ingresa tu numero para ponernos en contacto");
alert("Numero ingresado: "+ numeroTelefonico);

const carro=[];

//cards de varillas
const bamboo={
    id:1,
    imagen:"Imagenes/varilla/varilla.bamboo.jfif",
    nombre:"BAMBOO",
    precio: 400
}

let tarjetas=document.getElementById("varilla");
tarjetas.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src=${bamboo.imagen} class="card-img-top" alt="bamboo">
    <div class="card-body">
        <h5 class="card-title text-center">${bamboo.nombre}</h5>
        <p class="card-text text-center">$ ${bamboo.precio}</p>
        <button id="botonVar" class="btn btn-primary">Comprar</button>
    </div>
    </div>
`;

let botonVarilla=document.getElementById("botonVar");
botonVarilla.addEventListener("click",interactuar);
function interactuar(){
    alert("Agregaste bamboo al carrito");
}
botonVarilla.onclick = () => {
    console.log("Agregaste la BAMBOO al carrito");
    carro.push(bamboo);
    console.table(carro);
}
botonVarilla.onmouseover = () => {
    botonVarilla.className="btn btn-outline-success ";
}

botonVarilla.onmouseout = () => {
    botonVarilla.className="btn btn-primary";
}

