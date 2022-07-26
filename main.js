
const nombre = document.getElementById ("nombre")
const apellido = document.getElementById ("apellido")
const edad = document.getElementById ("edad")
const email = document.getElementById ("email")
const form = document.getElementById ("form")
const parrafo = document.getElementById ("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(nombre.value.length <3){
        warnings += `Nombre no valido <br>`
        entrar = true
    }

    if(apellido.value.length <3){
        warnings += `Apellido no valido <br>`
        entrar = true
    }
    
    if(edad.value <18){
            warnings += `Acceso solo a mayores de 18 años <br>`
            entrar = true
        }
   
    if(!regexEmail.test(email.value)){
        warnings += `El correo no es valido <br>`
       entrar = true
    }

    if (entrar){
        parrafo.innerHTML= warnings
    } else {
       parrafo.innerHTML="Enviado"
    }
})

