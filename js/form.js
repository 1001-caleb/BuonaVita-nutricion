var botonAdicionar = document.getElementById("adicionar-paciente");
botonAdicionar.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event){
   event.preventDefault(); // para que no recargue la pagina
    //console.log("click")
    var form = document.getElementById("form-adicionar");
    //console.log(form);

    var nombre = form.nombre.value;
    var peso= form.peso.value;
    var altura= form.altura.value;
    var gordura = form.gordura.value;
    
    var tabla = document.querySelector("#tabla-pacientes")

    pacienteTr = document.createElement("tr");

    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura; 
    imcTd.textContent = calcularIMC(peso, altura);
    
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    console.log(imcTd);

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);
    
}































































































































