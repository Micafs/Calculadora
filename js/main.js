//Traigo pantalla que es de donde voy a sacar la informacion
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

//Como buscamos que cuando apretemos botones pasen cosas, vamos a tener que agregar escuchadores de eventos.

//Con TEXTCONTENT traemos todo el contenido de los botones

botones.forEach(boton =>{
    boton.addEventListener("click", ()=> {
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar") {
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            
            return;
        }

//eval avalua un conjunto de strings que tengan operaciones matematicas en 1 solo string y no en numero y nos evalua lo que escribamos y lo muestra en pantalla 

        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval (pantalla.textContent)
            } catch{
                pantalla.textContent = "Error!"
            }
        
        return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent +=botonApretado;
        }

        
    })
})
