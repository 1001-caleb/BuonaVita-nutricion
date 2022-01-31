var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = caprturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    

    tabla.appendChild(pacienteTr);

});

function caprturarDatosPacientes(form) {
    //capturando los datos del form
    var paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
        //creando una row y los td y añadiendo sus respectivas clases
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        var nombreTd = document.createElement("td");
        nombreTd.classList.add("info-nombre");
        var alturaTd = document.createElement("td");
        alturaTd.classList.add("info-altura");
        var pesoTd = document.createElement("td");
        pesoTd.classList.add("info-peso");
        var gorduraTd = document.createElement("td");
        gorduraTd.classList.add("info-gordura");
        var imcTd = document.createElement("td");
        imcTd.classList.add("info-imc");
    
        //asignar los valores a textcontent
        nombreTd.textContent = paciente.nombre;
        alturaTd.textContent = paciente.altura;
        pesoTd.textContent = paciente.peso;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc;
    
        //asignacion al tr de los td y a la tbody al tr
        pacienteTr.appendChild(nombreTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
}