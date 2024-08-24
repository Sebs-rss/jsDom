var miBtn = document.getElementById("button");

miBtn.addEventListener('click',function(){
    click.preventDefault();
    var nombreValor = document.querySelector(".nombre");
    var asuntoValor = document.querySelector(".asunto");
    var mensajeValor = document.querySelector(".mensaje");
        
    if(nombreValor.value ===" "){
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    }
    
    if(asuntoValor.value ===" "){
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    }
    if(mensajeValor.value ===" "){
        document.querySelector(".errorNombre").innerHTML = "El mensaje es requerido";
    }

    }
});
