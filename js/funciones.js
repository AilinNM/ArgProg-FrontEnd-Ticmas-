

document.getElementById('boton').onclick = function() 
{
    console.log("Evento en el click");
    document.getElementById("enviar").innerHTML="Mensaje enviado con exito";
}


function myFunction() {
    var txt;
    if (confirm("Para contactar, baje al final de la pagina")) {
      txt = "OK!";
    } else {
      txt = "Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }


