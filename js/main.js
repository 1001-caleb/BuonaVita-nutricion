// var title = document.querySelector(".title");
// title.textContent = "Buena vida nutrición";

//IMC asocia el peso y la altura de una persona, formula: IMC = peso / altura*altura

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    console.log(peso);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    console.log(altura);

    var tdIMC = paciente.querySelector(".info-imc")
    console.log(tdIMC);

    function calcularIMC(peso, altura) {
        var resultadoImc = peso / (altura * altura);
         console.log(resultadoImc);
        tdIMC.textContent = resultadoImc.toFixed(2);
    }
    calcularIMC(peso, altura);

    pesoEsValido = true;
    alturaEsValida = true;
    function validarPesoAltura() {
        if (peso <= 0 || peso >= 400) {
            // alert("El peso no puede ser menor a cero, ni mayor a 400");
            tdIMC.textContent = "peso incorrecto";
            pesoEsValido = false;
            paciente.classList.add("valor-incorrecto");
        }
        if (altura <= 0 || altura >= 2.50) {
            // alert("La altura no puede ser menor a cero ni mayor a 2.50m");
            tdIMC.textContent = "Altura incorrecta";
            alturaEsValida = false;
            paciente.classList.add("valor-incorrecto");
        }
    }
    validarPesoAltura();
}

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

    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura; 
    
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);
    
}





















































































































