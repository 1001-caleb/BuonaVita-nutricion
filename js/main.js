// var title = document.querySelector(".title");
// title.textContent = "Buena vida nutrición";

//IMC asocia el peso y la altura de una persona, formula: IMC = peso / altura*altura

var pacientes = document.querySelector("#paciente-pablo");
// console.log(pacientes);

var tdPeso = pacientes.querySelector(".info-peso");
var peso = tdPeso.textContent;
// console.log(peso);

var tdAltura = pacientes.querySelector(".info-altura");
var altura = tdAltura.textContent;
// console.log(altura);

function calcularIMC (peso, altura){
    var resultadoImc = peso / (altura*altura);
    // console.log(resultadoImc);
    var mandarInfo = document.querySelector(".info-imc").innerHTML = (resultadoImc);
}
calcularIMC(peso, altura);

function validarPesoAltura (){
    if (peso <= 0   || peso >= 400){
        alert("El peso no puede ser menor a cero, ni mayor a 400")
    }
    if (altura <= 0   || altura >= 2.50){
        alert("La altura no puede ser menor a cero ni mayor a 2.50m")
    }
}

validarPesoAltura();

