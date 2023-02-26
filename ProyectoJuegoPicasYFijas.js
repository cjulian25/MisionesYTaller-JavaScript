const numero = document.getElementById("numeroDigitado")
const botonBuscar = document.getElementById("buscar")
const botonNuevoJuego = document.getElementById("nuevoJuego")

numero.disabled = false
botonBuscar.disabled = false

let picas = 0
let fijas = 0
var contadorElemInput = 0
var contadorIntentos = 0
let contenido = ""

let longitudMax = 4 //Numero de elementos(longitud) del array AdivinaElNumero
let valorMax = 10 //Numero a multiplicar para el metodo random
const adivinaElNumero = []

while (adivinaElNumero.length < longitudMax) {
    let numAleatorio = Math.floor(Math.random() * valorMax);
    if (!adivinaElNumero.some(item => item == numAleatorio)) {
        adivinaElNumero.push(numAleatorio);
    }
}

buscar.addEventListener("click", () => {

    let numeroSplit = (numero.value).split("")

    numeroSplit.forEach(element => {
        contadorElemInput += 1
    })
    if (contadorElemInput != 4) {
        alert("Debes escribir un numero de 4 digitos, en el rango de 0 a 9 y sin signos")
        contadorElemInput = 0
        numero.value = ""
    } else {

        for (i = 0; i < adivinaElNumero.length; i++) {
            let trans = parseInt(numeroSplit[i])
            if ((adivinaElNumero.includes(trans)) && numeroSplit[i] == adivinaElNumero[i]) {
                fijas += 1
            }

            if ((adivinaElNumero.includes(trans)) && numeroSplit[i] != adivinaElNumero[i]) {
                picas += 1
            }
        }

        contadorIntentos += 1

        let encabezado = `<table style="background-color:#90c3f7"><th>NUMERO</th><th>PICAS</th><th>FIJAS</th><th>INTENTOS</th> </table>`
        document.getElementById("encabezado").innerHTML = encabezado

        contenido = `<table>`
        contenido += `<tr><td> ${numero.value} </td><td> ${picas} </td><td> ${fijas} </td><td> ${contadorIntentos} </td></tr>`
        contenido += `</table>`
        document.getElementById("intentos").innerHTML += contenido

    }

    if (fijas != 4) {

        fijas = 0
        picas = 0
        numero.value = ""
        contadorElemInput = 0

    } else {
        numero.disabled = true
        botonBuscar.disabled = true
        botonNuevoJuego.disabled = false
        let felicidades = `<br><br><table style="background-color:#90c3f7"><th>Felicidades el número ganador es:  ${numero.value}, GANASTE!! <br> te tomo ${contadorIntentos} intento(s)</th></table>`
        document.getElementById("ganador").innerHTML = felicidades
    }
})

botonNuevoJuego.addEventListener("click", () => {

    adivinaElNumero.splice(0, longitudMax)

    fijas = 0
    picas = 0
    numero.value = ""
    contadorElemInput = 0
    contadorIntentos = 0
    contenido = ""
    document.getElementById("encabezado").innerHTML = ""
    document.getElementById("intentos").innerHTML = ""
    document.getElementById("ganador").innerHTML = ""

    numero.disabled = false
    botonBuscar.disabled = false
    botonNuevoJuego.disabled = true

    while (adivinaElNumero.length < longitudMax) {
        let numAleatorio = Math.floor(Math.random() * valorMax);
        if (!adivinaElNumero.some(item => item == numAleatorio)) {
            adivinaElNumero.push(numAleatorio);
        }
    }
})