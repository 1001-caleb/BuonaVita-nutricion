
var tabla = document.querySelector("#tabla-pacientes");
tabla.addEventListener("dblclick", function(event){
    //identificamos donde ocurrió el evento
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500); 
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         // console.log("doble click");
//         this.remove();
//     });
// });