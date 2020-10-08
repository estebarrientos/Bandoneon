let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let usuario = document.getElementById("usuario");
let password = document.getElementById("pwd");
let boton = document.getElementById("boton");
let noNombre = document.getElementById("noNombre");
let noEmail = document.getElementById("noEmail");
let noUsuario = document.getElementById("noUsuario");
let noPass = document.getElementById("noPass");
let formulario = document.getElementById("formulario")

boton.addEventListener("click", validarFormulario);

function validarFormulario(evento){
    evento.preventDefault();
    
    if(nombre.value =="" && email.value == "" && usuario.value == "" && password.value == ""){
       alert("Debes ingresar todos los datos");

    }else if(nombre.value =="" && email.value != "" && usuario.value != "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";

    }else if(nombre.value !="" && email.value == "" && usuario.value != "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu Email";

    }else if(nombre.value !="" && email.value != "" && usuario.value == "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";


    }else if(nombre.value !="" && email.value != "" && usuario.value != "" && password.value == ""){
        formulario.classList.add ("was-validated");
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";

    }else if(nombre.value !="" && email.value == "" && usuario.value == "" && password.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu Email";
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";


    }else if(nombre.value =="" && email.value != "" && usuario.value == "" && password.value == ""){

        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noEmail.classList.add ("valid-feedback");
        noEmail.textContent = "Email Válido";
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";

    }else if(nombre.value =="" && email.value == "" && usuario.value != "" && password.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu Email";
        noUsuario.classList.add ("valid-feedback");
        noUsuario.textContent = "Usuario Válido";
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";


    }else if(nombre.value =="" && email.value == "" && usuario.value == "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add("invalid-feedback");
        noNombre.textContent = "Ingresa tu nombre";
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu Email";
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";
        noPass.classList.add ("valid-feedback");
        noPass.textContent = "Contraseña Válida";

    }else if(nombre.value !="" && email.value != "" && usuario.value == "" && password.value == ""){
        
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noEmail.classList.add("valid-feedback");
        noEmail.textContent = "Email válido";
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";

    }else if(nombre.value !="" && email.value == "" && usuario.value != "" && password.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu email";
        noUsuario.classList.add("valid-feedback");
        noUsuario.textContent = "Usuario válido";
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";



    }else if(nombre.value !="" && email.value == "" && usuario.value == "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Nombre Válido";
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu email";
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";
        noPass.classList.add("valid-feedback");
        noPass.textContent = "Contraseña válida";



    }else if(nombre.value =="" && email.value != "" && usuario.value != "" && password.value == ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";
        noEmail.classList.add("valid-feedback");
        noEmail.textContent = "Email Válido";
        noUsuario.classList.add("valid-feedback");
        noUsuario.textContent = "Usuario Válido";
        noPass.classList.add("invalid-feedback");
        noPass.textContent = "Debes ingresar una contraseña";



    }else if(nombre.value =="" && email.value != "" && usuario.value == "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";
        noEmail.classList.add("valid-feedback");
        noEmail.textContent = "Email válido";
        noUsuario.classList.add("invalid-feedback");
        noUsuario.textContent = "Debes ingresar un Usuario";
        noPass.classList.add("valid-feedback");
        noPass.textContent = "Contraseña válida";



    }else if(nombre.value =="" && email.value == "" && usuario.value != "" && password.value != ""){
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("invalid-feedback");
        noNombre.textContent = "Debes ingresar tu Nombre";
        noEmail.classList.add("invalid-feedback");
        noEmail.textContent = "Ingresa tu email";
        noUsuario.classList.add("valid-feedback");
        noUsuario.textContent = "Usuario válido";
        noPass.classList.add("valid-feedback");
        noPass.textContent = "Contraseña válida";



    }else{
        formulario.classList.add ("was-validated");
        noNombre.classList.add ("valid-feedback");
        noNombre.textContent = "Válido";
        noEmail.classList.add("valid-feedback");
        noEmail.textContent = "Válido";
        noUsuario.classList.add("valid-feedback");
        noUsuario.textContent = "Válido";
        noPass.classList.add("valid-feedback");
        noPass.textContent = "Válido";

    
    }



    

    


}

