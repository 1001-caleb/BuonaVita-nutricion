var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);
    if (!validarPaciente(paciente)){
        // console.log("paciente incorrecto");
        alert("datos de entrada incorrectos");
        return;
    }
    var tabla = document.querySelector("#tabla-pacientes");
    

    tabla.appendChild(pacienteTr);
    form.reset();
});

function capturarDatosPacientes(form) {
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

        var nombreTd = construitTd(paciente.nombre, "info-nombre");
        // nombreTd.classList.add("info-nombre");
        var pesoTd = construitTd(paciente.peso, "info-peso");
        // alturaTd.classList.add("info-altura");
        var alturaTd = construitTd(paciente.altura, "info-altura");
        // pesoTd.classList.add("info-peso");
        var gorduraTd = construitTd(paciente.gordura, "info-gordura");
        // gorduraTd.classList.add("info-gordura");
        var imcTd = construitTd(paciente.imc, "info-imc");
        // imcTd.classList.add("info-imc");
    
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

function construitTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
     return td;
}

function validarPaciente(paciente){
    if (validarPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
    
}