let nombreCompleto = prompt("Ingresa tu Nombre Completo");
alert("Nombre ingresado: "+ nombreCompleto);

let numeroTelefonico = prompt("Ingresa tu numero para ponernos en contacto");
alert("Numero ingresado: "+ numeroTelefonico);

let difusorEnAerosol = 500;
let difusorTextil = 350;
let difusorEnVarilla = 500;
let opcion = mostrarMenu();
let dineroIngresado = 0;

    if(opcion!=4)
    {
      venderProducto(opcion);
    }
    else
    {
      alert("GRACIAS");
    }

    function mostrarMenu()
    {
      return prompt(`Seleccione una opcion: 
                    1. TEXTIL (${difusorTextil}ARS)
                    2. AEROSOL (${difusorEnAerosol}ARS)
                    3. VARILLA (${difusorEnVarilla}ARS)
                    4. FIN`);
      
    }

    function venderProducto(opcion)
    {
      switch (opcion) 
      {
        case "1":
        {
            pedirDinero(difusorTextil)
            break;
        }
        case "2":
        {
            pedirDinero(difusorEnAerosol)
            break;
        }
        case "3":
        {
            pedirDinero(difusorEnVarilla)
            break;
        }
        default:
        {
            alert("opcion invalida")
            break;
        }
        
      }

    }
    function pedirDinero(priceProduct)
    {
            while(dineroIngresado<priceProduct)
            {
              let dinero = Number(prompt("¿Con cuanto va a pagar?"));
              
              if(dinero<priceProduct)
              {
                  alert("monto invalido")
              }
              else{
                  dineroIngresado+=dinero;
              }
            }
            
              let cambio = dineroIngresado - priceProduct;
              alert("Su cambio es: " + cambio);
              alert("Gracias, nos pondremos en contacto para la entrega de su producto");

    }
    

