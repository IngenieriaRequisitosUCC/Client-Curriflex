function activarEdicion() {
    document.getElementById("formulario").style.display = "block";
  }
  
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var numero = document.getElementById("numero").value;
    var correo = document.getElementById("correo").value;
    var experiencia = document.getElementById("experiencia").value;
    var descripcion = document.getElementById("descripcion").value;
  
    document.getElementById("nombreCompletoTitulo").innerText = nombreCompleto;
    document.getElementById("numeroParrafo").innerText = numero;
    document.getElementById("correoParrafo").innerText = correo;
  
    var experienciaItems = experiencia.split("\n");
    var experienciaLista = document.getElementById("experienciaLista");
    experienciaLista.innerHTML = "";
    for (var i = 0; i < experienciaItems.length; i++) {
      var experienciaItem = document.createElement("li");
      experienciaItem.innerText = experienciaItems[i];
      experienciaLista.appendChild(experienciaItem);
    }
  
    document.getElementById("descripcionParrafo").innerText = descripcion;
  
    document.getElementById("formulario").style.display = "none";
  });
  
  document.getElementById("actualizar").addEventListener("click", function() {
    document.getElementById("formulario").style.display = "block";
  });
  
  document.getElementById("cancelar").addEventListener("click", function() {
    document.getElementById("formulario").style.display = "none";
  });
  
  document.getElementById("imprimir").addEventListener("click", function() {
    var hojaVida = document.getElementById("hojaVida").outerHTML;
    var pagina = '<!DOCTYPE html>\n<html>\n<head>\n<title>Hoja de Vida</title>\n</head>\n<body>\n' + hojaVida + '\n</body>\n</html>';
    var ventana = window.open('', '', 'height=500,width=500');
    ventana.document.write(pagina);
    ventana.print();
    ventana.close();
  });
  

  
  


