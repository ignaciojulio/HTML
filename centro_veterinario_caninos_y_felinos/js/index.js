// asignación de variables
// formulario
// manipulación del DOM
const sectionValidación = document.getElementById('validación')
sectionValidación.innerHTML= 'Envió exitoso'
// variables de formulario
let botónValidarCita = document.getElementById('validar-cita')
let sectionFormulario = document.getElementById('formulario')
let botónOtraCita = document.getElementById('otra-cita')
// primera parte de artículo
let primer_articulo = document.getElementById('primer_articulo')
let segundo_articulo = document.getElementById('segundo_articulo')
// artículos completo
let sectionVerMasPerro = document.getElementById('ver-mas-perro')
let sectionVerMasGato = document.getElementById('ver-mas-gato')
// botón para el artículo completo
let botónVerMasGato = document.getElementById('botón-ver-mas-Gato')
let botónVerMasPerro = document.getElementById('botón-ver-mas-perro')
// botón para regresas a ver los el inicio de los artículos
let botónContraerGato = document.getElementById('botón_contraer_gato')
let botónContraerPerro = document.getElementById('botón-contraer-perro')

// escuchadores de eventos
//  botones para ver el articulo completo
botónVerMasPerro.addEventListener('click', verMasPerro)
botónVerMasGato.addEventListener('click', verMasGato)
// botones contraer el articulo
botónContraerPerro.addEventListener('click', home)
botónContraerGato.addEventListener('click', home)
// botones de formulario
botónValidarCita.addEventListener('click',envió)
botónOtraCita.addEventListener('click',otraCita)
// funciones de ocultar y mostrar
function home() {
    sectionVerMasPerro.style.display = 'none'
    sectionVerMasGato.style.display = 'none'
    segundo_articulo.style.display = 'block'
    primer_articulo.style.display = 'block'
    botónVerMasPerro.style.display = 'block'
    botónVerMasGato.style.display = 'block'
    // sistema de control para no afectar el formulario cuando se contraiga el articulo
    if (sectionFormulario.style.display == 'none') { //si el formulario esta desplegado
        sectionFormulario.style.display = 'none'
        botónOtraCita.style.display = 'block'
        botónValidarCita.style.display = 'none'
        sectionValidación.style.display = 'block'
    } else{ //si el formulario no esta desplegado
        sectionFormulario.style.display = 'block'
        botónValidarCita.style.display = 'block'
        botónOtraCita.style.display = 'none'
        sectionValidación.style.display = 'none'
    }
}

function verMasPerro() {
    botónVerMasPerro.style.display = 'none'
    sectionVerMasPerro.style.display = 'block'
    segundo_articulo.style.display = 'none'
}

function verMasGato() {
    botónVerMasGato.style.display = 'none'
    sectionVerMasGato.style.display = 'block'
    primer_articulo.style.display = 'none'
}

function envió(){
    sectionFormulario.style.display = 'none'
    botónOtraCita.style.display = 'block'
    botónValidarCita.style.display = 'none'
    sectionValidación.style.display = 'block'
}

function otraCita(){
    sectionFormulario.style.display = 'block'
    botónValidarCita.style.display = 'block'
    botónOtraCita.style.display = 'none'
    sectionValidación.style.display = 'none'
}

// inicio de la operación
home()