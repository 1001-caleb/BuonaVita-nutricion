// var title = document.querySelector(".title");
// title.textContent = "Buena vida nutrición";

//IMC asocia el peso y la altura de una persona, formula: IMC = peso / altura*altura

var pacientes = document.querySelector("#paciente-pablo");
// console.log(pacientes);

var tdPeso = pacientes.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso)

var tdAltura = pacientes.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura)

function calcularIMC (peso, altura){
    var resultadoImc = peso / (altura*altura);
    console.log(resultadoImc);
}

calcularIMC(peso, altura);
