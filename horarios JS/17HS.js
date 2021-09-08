


let contadorInterno17 = document.querySelector(".contadorInterno17");
let botonSeleccionar17HS = document.querySelector(".botonSeleccionar17HS");
let botonCancelar17HS = document.querySelector(".botonCancelar17HS");
contadorInterno17.textContent =   Math.round(Math.random (0 - 1 )*10) ;


/* ------------------------------ */ 



botonSeleccionar17HS.addEventListener('click', (e) => {
    
    if (contadorInterno17.textContent >= 1){
           
        swal({
            title: "¿Deseas contratar este viaje a las 17:00 hs?",
            text: "",
            icon: "info",
            buttons: true,
            dangerMode: true,
          })
        .then((willDelete) => {
            if (willDelete) {
                const p = document.createElement("P"); 
                const button = document.createElement("button"); 
                button.textContent = " X "
                button.classList.add("botonBorrar");

                p.textContent= "- Viaje programado para las 17:00 hs.";
                p.appendChild(button);
                contadorContratados.appendChild(p);

                contadorInterno17.textContent--; 
                swal("¡Listo!", "¡Tu viaje ha sido confirmado!", "success");

                button.addEventListener('click', (e) =>{
                    
                    swal({                                                            /*   https://sweetalert.js.org/    -- Alerts personalizados       */
                        title: "¿Estas seguro/a que deseas cancelar el viaje?",
                        text: "",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                            const item = e.target.parentElement; 
                            contadorContratados.removeChild(item);
                            contadorInterno17.textContent++;
                          swal("Tu viaje ha sido cancelado", {
                            icon: "success",
                          });
                        } 
                      });

                    
                });
            swal("¡Viaje contratado!", {
                icon: "success",
              });
            } 
          });

               

            
        }else{
          swal("Lo sentimos :(", "No hay motos disponibles.", "error");
    }
    });




/* ------------------------------ */ 

