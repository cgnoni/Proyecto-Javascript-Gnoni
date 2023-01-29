let almacenamientoDatos = localStorage;

const nombre = document.querySelector("#name"),
  mail = document.querySelector("#email"),
  numCelular = document.querySelector("#celular"),
  redSocial = document.querySelector("#redSocial"),
  mensaje = document.querySelector("#floatingTextarea"),
  check = document.querySelector("#checkTerms"),
  btnSubmit = document.querySelector("#ingresar"),
  btnReset = document.querySelector("#borrar")

nombre.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("nom", nombre.value);
});

mail.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("mai", mail.value);
});

numCelular.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("cel", numCelular.value);
});

redSocial.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("sol", redSocial.value);
});

mensaje.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("men", mensaje.value);
});

check.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("ch", check.value);
});

btnSubmit.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("sub", btnSubmit.value);
});

btnReset.addEventListener("focusout", function () {
  almacenamientoDatos.setItem("res", btnReset.value);
});

function recuperoValores() {
    nombre.value = almacenamientoDatos.getItem("nom");
    mail.value = almacenamientoDatos.getItem("mai");
    numCelular.value = almacenamientoDatos.getItem("cel");
    redSocial.value = almacenamientoDatos.getItem("sol");
    mensaje.value = almacenamientoDatos.getItem("men");
    check.value = almacenamientoDatos.getItem("ch");
    btnSubmit.value = almacenamientoDatos.getItem("sub");
    btnReset.value = almacenamientoDatos.getItem("res");
}

document.addEventListener("DOMContentLoaded", recuperoValores);
