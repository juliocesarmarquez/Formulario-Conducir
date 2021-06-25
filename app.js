const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const edad = document.querySelector("#edad");
const registro = document.querySelector("#registro");
const fecha = document.querySelector("#fecha");
const boton = document.querySelector("#boton");


boton.addEventListener('click', function () {
    const age = parseInt(edad.value);
    const name = (nombre.value);
    const surname = (apellido.value);
    const selectedOption = registro.options[registro.selectedIndex].value;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();


    const fullDate = month < 9 ? year + "0" + month + day : year + month + day;
    if (age < 18) {
        alert("Sos menor de edad, no estas habilitado");
    }
    else if (selectedOption === "no") {
        alert("No tenes licencia, no estas habilitado");
    }
    else if (parseInt(fecha.value) < parseInt(fullDate)) {
        alert("Su licencia está expirada");
    }
    else {
        alert(name + " " + surname + " estas habilitado para conducir.");
    }

});     
