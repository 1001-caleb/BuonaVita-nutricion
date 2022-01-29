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
