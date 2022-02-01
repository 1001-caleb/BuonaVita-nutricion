var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    

    var errores = validarPaciente(paciente);
    if (errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }
    adicionarPacienteEnLaTabla(paciente);
    form.reset();

    //borrando mensajes de error
    var mensajesErrores = document.querySelector("#mensajes-errores");
   mensajesErrores.innerHTML = "";  
});

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

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
    var errores = [];
    //validando que no esten vacios los campos
    if (paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if (paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if (paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia");
    }
    if (paciente.gordura.length == 0){
        errores.push("El porcentaje de gordura no puede estar vacio");
    }

    //validando peso y altura
    if (!validarPeso(paciente.peso)){
        errores.push("Peso ingresado incorrecto");
    }
    if (!validarAltura(paciente.altura)){
        errores.push("Altura ingresada incorrecta");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = ""
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}