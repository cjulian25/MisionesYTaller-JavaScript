const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const genero = document.getElementById("genero")
const fecha = document.getElementById("fecha")

const personas = [{nombre:"Tasha", edad:21, genero:"f", fecha:{dia:01,mes:09,anio:2002}},
{nombre:"Tyrone", edad:19, genero:"m", fecha:{dia:01,mes:07,anio:2004}},
{nombre:"Uniqua", edad:60, genero:"f", fecha:{dia:01,mes:04,anio:1963}},
{nombre:"Austin", edad:13, genero:"m", fecha:{dia:01,mes:01,anio:2009}},
{nombre:"Pablo", edad:9, genero:"m", fecha:{dia:13,mes:09,anio:2014}}]

const registrar = document.getElementById("registrar")
const mostrarNombres = document.getElementById("mostrNombres")
const mostrarEdades = document.getElementById("mostrEdades")

registrar.addEventListener("click", () => {
    let name = nombre.value
    let age = edad.value
    let gender = genero.value
    let date = fecha.value

    if(name == "" || age == "" || gender == "" || date == ""){
        alert("Hay campos vacios")
    }else{
        date = date.split("-")
        let dia = date[2]
        let mes = date[1]
        let anio = date[0]
        personas.push({nombre:name, edad:age, genero:gender, fecha:{dia:dia, mes:mes, anio:anio}})

        nombre.value = ""
        edad.value = ""
        genero.value = ""
        fecha.value = ""
    }

})

mostrarNombres.addEventListener("click", function(){
    let contenido = ""
    contenido = `<table><th>Nombres</th>`
    let nombres = personas.map(persona => persona.nombre)
    nombres.forEach(nombre =>{
        contenido += `<tr><td>${nombre}</td></tr>`
    })
    contenido += `</table>`
    document.getElementById("pantalla").innerHTML = contenido
})

mostrarEdades.addEventListener("click", calcularEdades)

function calcularEdades(){
    let adultosMayores = personas.filter(persona => {
        return persona.edad >= 50
    }).map(item => item.nombre)

    let adultos = personas.filter(persona => {
        return persona.edad >= 18 && persona.edad <50
    }).map(item => item.nombre)

    let ninos = personas.filter(persona => {
        return persona.edad < 18
    }).map(item => item.nombre)

    let contenido = `<table><th>Niños</th><th>Adultos</th><th>Adultos Mayores</th>`
    for(i=0;i=length.contenido;i++){
        
    }
}