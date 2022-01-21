var btnIngresarTexto = document.getElementById("btnIngresarText");
var btnEncriptar     = document.getElementById("btnEncriptar");
var btnDesencriptar  = document.getElementById("btnDesencriptar");
var btnCopiar        = document.getElementById("btnCopiar");
var inputText        = document.getElementById("inputText");
var areaDeMensaje    = document.getElementById("msjArea");

var regExp           = /^[a-z\s]+$/;


inputText.addEventListener('keyup',() =>{
    
// agregar efectos que demuestren el error.
    if(regExp.test(inputText.value)){
        console.log("si hay minusculas")
    }else{
        console.log("no hay minusculas");
        console.log(inputText.value);
    }
    
    
    });

    function encriptar(wrd) {
        if(wrd == "a"){
            wrd = "ai";
        }else if(wrd == "e"){
            wrd = "enter";
        }else if(wrd == "i"){
            wrd = "imes";
        }else if(wrd == "o"){
            wrd = "ober";
        }else if(wrd == "u"){
            wrd = "ufat";
        }
         
     
        return wrd;
     }

     function desencriptar(wrd){
    
        if(wrd == "ai"){
            wrd = "a";
        }else if(wrd == "enter"){
            wrd = "e";
        }else if(wrd == "imes"){
            wrd = "i";
        }else if(wrd == "ober"){
            wrd = "o";
        }else if(wrd == "ufat"){
            wrd = "u"
        }
        return wrd;
        
    }


    function mensajeEncriptado(){
    
        var newtexto = inputText.value.replace(/[aeiou]/g, encriptar);
    
        areaDeMensaje.value = newtexto;
        return false;
    
    }
    function mensajeDesencriptado(){
    
        var newtexto = inputText.value.replace(/ai|enter|imes|ober|ufat/g, desencriptar);
        
        areaDeMensaje.value = newtexto;
        return false;
    
    }
     
     btnEncriptar.onclick = mensajeEncriptado;
     btnDesencriptar.onclick = mensajeDesencriptado;
    
    
    


