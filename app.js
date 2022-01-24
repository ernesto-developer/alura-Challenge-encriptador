var btnIngresarTexto = document.getElementById("btnIngresarText");
var btnEncriptar = document.getElementById("btnEncriptar");
var btnDesencriptar = document.getElementById("btnDesencriptar");
var btnCopiar = document.getElementById("btnCopiar");
var inputText = document.getElementById("inputText");
var areaDeMensaje = document.getElementById("msjArea");
var btnCopiar = document.getElementById("btnCopiar");

var regExp = /^[a-z\s]+$/;

var textValido = false;

btnCopiar.addEventListener("click", function () {
  areaDeMensaje.focus();
  document.execCommand("selectAll");
  document.execCommand("copy");
  // navigator.clipboard.writeText(inputMensaje.value);
});

inputText.addEventListener("keyup", () => {
  // agregar efectos que demuestren el error.
  if(inputText.value != ""){
    document.querySelector(".mensajeDeHerror").classList.remove("mensajeDeHerror-inactivo");
    if (regExp.test(inputText.value)) {
      document.querySelector(".mensajeDeHerror").classList.remove("mensajeDeHerror-enmarcado");
      document.querySelector(".textHerror").classList.remove("textHerror-activo");
      document.getElementById("iconoAdvertencia").style.display = "none";
    
      document.querySelector(".textOk").classList.add("textOk-activo");
      document.getElementById("icono").style.display="block";
      // textValido = true;
    } else {
      document.querySelector(".textOk").classList.remove("textOk-activo");
      document.getElementById("icono").style.display="none";
  
     document.getElementById("iconoAdvertencia").style.display = "block";
     document.querySelector(".textHerror").classList.add("textHerror-activo");
      // textValido = false;
    }
  }else{
    document.querySelector(".mensajeDeHerror").classList.add("mensajeDeHerror-inactivo");
  }
});

function encriptar(wrd) {
  if (wrd == "a") {
    wrd = "ai";
  } else if (wrd == "e") {
    wrd = "enter";
  } else if (wrd == "i") {
    wrd = "imes";
  } else if (wrd == "o") {
    wrd = "ober";
  } else if (wrd == "u") {
    wrd = "ufat";
  }

  return wrd;
}

function desencriptar(wrd) {
  if (wrd == "ai") {
    wrd = "a";
  } else if (wrd == "enter") {
    wrd = "e";
  } else if (wrd == "imes") {
    wrd = "i";
  } else if (wrd == "ober") {
    wrd = "o";
  } else if (wrd == "ufat") {
    wrd = "u";
  }
  return wrd;
}

function habilitacionDeSegundoSlide() {
 
  btnIngresarTexto.classList.add("btnIngresaTuTexto-inactivo");
  document.querySelector(".cajaDeTexto").classList.add("cajaDeTexto-activo");
  btnCopiar.classList.add("botonCopiar-activo");
  document.querySelector(".textoDentroDeCaja").focus();
  document.querySelector(".muneco").classList.add("muneco-inactivo");
  document.querySelector(".orientacionFrame").classList.add("orientacionFrame-inactivo");
  areaDeMensaje.classList.add("mensajeArea-activo");
}

function mensajeEncriptado() {
  var newtexto = inputText.value.replace(/[aeiou]/g, encriptar);

  if(regExp.test(inputText.value)){

    areaDeMensaje.value = newtexto;
    habilitacionDeSegundoSlide();

  }else{
    document.querySelector(".mensajeDeHerror").classList.add("mensajeDeHerror-enmarcado");
  }

  return false;
}
function mensajeDesencriptado() {
  var newtexto = inputText.value.replace(
    /ai|enter|imes|ober|ufat/g,
    desencriptar
  );

  areaDeMensaje.value = newtexto;
  return false;
}

btnEncriptar.onclick = mensajeEncriptado;
btnDesencriptar.onclick = mensajeDesencriptado;
btnIngresarTexto.onclick = habilitacionDeSegundoSlide;
