
var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function(event){
    //identificamos donde ocurrió el evento
    event.target.parentNode.remove();
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         // console.log("doble click");
//         this.remove();
//     });
// });