var botonBuscar = document.querySelector("#buscar-paciente");
botonBuscar.addEventListener("click", function(){
    console.log("buscando..");
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load", function(){
        var respuesta = xhr.responseText;
        
        var pacientes = JSON.parse(respuesta);
        pacientes.forEach(function(paciente){
            adicionarPacienteEnLaTabla(paciente);
        });
    });
    xhr.send();
});