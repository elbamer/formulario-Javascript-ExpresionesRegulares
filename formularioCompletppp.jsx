function validarFormulario() {
    var verificar = true;
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
   // var expRegPais = /^[a-záéíóúñ\s]*$/i;
    var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expRegTelefono = /^([0-9]\s*)*$/;
    var formulario = document.getElementById("formulario");
    var nombres = document.getElementById("nombres");
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

function radioButon() {
    var rates = document.getElementById('rates').value;
    var rate_value;
    if (rates == 'Infantil') {
        rate_value = document.getElementById('r1').value;

    } else if (rates == 'Juvenil') {
        rate_value = document.getElementById('r2').value;

    } else if (rates == 'Senior') {
        rate_value = document.getElementById('r3').value;
    }
}

document.getElementById('results').innerHTML = rate_value;
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    var rates = document.getElementById("rates");
    if (checkBox.checked == true) {
        text.style.display = "block";
        codigo.style.display = "block";
        rates.style.display = "block";
        codigo1.style.display = "block";
    } else {
        text.style.display = "none";
        codigo.style.display = "none";
        rates.style.display = "none";
        codigo1.style.display = "none";
    }
}



function validarNumeroSocio() {
    var input = document.getElementById("codigo").value;
    console.log(parseInt(input))
    if (input.length == 5 && parseInt(input) >= 10000 && parseInt(input) <= 99999) {
        alert("numero socio valido");
    } else {
        alert("numero socio invalido");
    }
}

function radioButon() {
    var rates = document.getElementById('rates').value;
    var rate_value;
    if (rates == 'Infantil') {
        rate_value = document.getElementById('r1').value;

    } else if (rates == 'Juvenil') {
        rate_value = document.getElementById('r2').value;

    } else if (rates == 'Senior') {
        rate_value = document.getElementById('r3').value;
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
   