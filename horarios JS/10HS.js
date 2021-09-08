


let contadorInterno10 = document.querySelector(".contadorInterno10");
let botonSeleccionar10HS = document.querySelector(".botonSeleccionar10HS");
let botonCancelar10HS = document.querySelector(".botonCancelar10HS");
contadorInterno10.textContent =   Math.round(Math.random (0 - 1 )*10) ;


/* ------------------------------ */ 



botonSeleccionar10HS.addEventListener('click', (e) => {
    
    if (contadorInterno10.textContent >= 1){
           
        swal({
            title: "¿Deseas contratar este viaje a las 10:00 hs?",
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

                p.textContent= "- Viaje programado para las 10:00 hs.";
                p.appendChild(button);
                contadorContratados.appendChild(p);

                contadorInterno10.textContent--; 
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
                            contadorInterno10.textContent++;
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

