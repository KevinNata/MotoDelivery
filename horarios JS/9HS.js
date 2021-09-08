
let contadorInterno9 = document.querySelector(".contadorInterno9");
let botonSeleccionar9HS = document.querySelector(".botonSeleccionar9HS");
let botonCancelar9HS = document.querySelector(".botonCancelar9HS");
contadorInterno9.textContent =   Math.round(Math.random (0 - 1 )*10) ;



/* ------------------------------ */ 

/* ------------------------------ */ 



botonSeleccionar9HS.addEventListener('click', (e) => {
    
    if (contadorInterno9.textContent >= 1){
           
        swal({
            title: "¿Deseas contratar este viaje a las 09:00 hs?",
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

                p.textContent= "- Viaje programado para las 09:00 hs.";
                p.appendChild(button);
                contadorContratados.appendChild(p);

                contadorInterno9.textContent--; 
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
                            contadorInterno9.textContent++;
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
