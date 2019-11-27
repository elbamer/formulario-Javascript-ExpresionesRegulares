function validarFormulario() {
    var verificar = true;
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
   // var expRegPais = /^[a-záéíóúñ\s]*$/i;
    var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expRegTelefono = /^([0-9]\s*)*$/;
    var formulario = document.getElementById("formulario");
    var nombres = document.getElementById("nombres");
    var direccion = document.getElementById("direccion");
    var pais = document.getElementById("pais");
    var email = document.getElementById("email");
    var Identificador = document.getElementById("Identificador");
    var telefono = document.getElementById("telefono");
    var comentario = document.getElementById("comentario");
    if (!nombres.value) {
        alert("Escriba sus nombres por favor.");
        nombres.focus();
        verificar = false;
        return false;
    }
    else if (nombres.value.split(" ").length < 2) {
        alert("Esciba sus nombres completos por favor.");
        nombres.focus();
        verificar = false;
        return false;
    }
    else if (!expRegNombres.exec(nombres.value)) {
        alert("Este campo admite letras de la a-zA-Z, ÁáÉéÍíÓóÚúÜüÑñ y no admite espacios en blanco al final.");
        nombres.focus();
        verificar = false;
        return false;
    }

    else if (!email.value) {
        alert("Escriba su email por favor.");
        email.focus();
        verificar = false;
        return false;
    }
    else if (!expRegEmail.exec(email.value)) {
        alert("Escriba un email valido por favor.");
        email.focus();
        verificar = false;
        return false;
    }
    else if ((Identificador.value != "") && !expRegUrl.exec(Identificador.value)) {
        alert("Escriba un Identificador valido por favor.");
        Identificador.focus();
        verificar = false;
        return false;
    }
    else if (!telefono.value) {
        alert("Escriba un n\u00famero de tel\u00E9fono por favor.");
        telefono.focus();
        verificar = false;
        return false;
    }
    else if (!expRegTelefono.exec(telefono.value)) {
        alert("el campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
        telefono.focus();
        verificar = false;
        return false;
    }
    else if (!comentario.value) {
        alert("el campo comentarios es requerido");
        comentario.focus();
        verificar = false;
        return false;
    }
    else if (comentario.value.length > 1000) {
        alert("El campo comentarios no puede tener mas de 1000 caracteres.");
        comentario.focus();
        verificar = false;
        return false;
    }

    if (verificar == true) {
        document.formulario.submit();
    }
}
function limpiarFormulario() {
    document.getElementById("formulario").reset();
}
function calcular() {
    var contadorChar = document.getElementById("contador-char").innerHTML = 1000 - document.formulario.comentario.value.length;
}
window.onload = function () {
    var botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarFormulario;
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick = validarFormulario;
};

//© 2019 Elba,
   