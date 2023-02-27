const numeroEnfrentamientos = document.getElementById("enfrentamientos")
const botonAceptar = document.getElementById("aceptar")
const botonNuevoJuego = document.getElementById("nuevoJuego")
const botonPiedra = document.getElementById("piedra")
const botonPapel = document.getElementById("papel")
const botonTijeras = document.getElementById("tijeras")
const botonResultado = document.getElementById("resultado")

numeroEnfrentamientos.disabled = false
botonAceptar.disabled = false

var contadorIntentos = 0
const optPiedra = 0
const optPapel = 1
const optTijeras = 2
let gano = 0 //contador para determinar quien gano
let perdio = 0 //contador para determinar quien perdio
let empate = 0 //contador para determinar si hubo empate
let contenido = ""

const piedraPapelOTijeras = [1, 2, 1, 2] //Array para guardar los numeros random (0=piedra, 1=papel, 2=tijeras)

aceptar.addEventListener("click", () => {

    while (piedraPapelOTijeras.length < numeroEnfrentamientos.value) {
        let numAleatorio = Math.floor(Math.random() * 3);
        piedraPapelOTijeras.push(numAleatorio);
    }

    if (numeroEnfrentamientos.value <= 0) {
        alert("Debes ingresar un numero positivo superior a 0")
    } else {
        numeroEnfrentamientos.disabled = true
        botonAceptar.disabled = true
        botonNuevoJuego.disabled = false
        botonPiedra.disabled = false
        botonPapel.disabled = false
        botonTijeras.disabled = false
    }
})

nuevoJuego.addEventListener("click", () => {

    //piedraPapelOTijeras.splice(0, numeroEnfrentamientos.value)

    numeroEnfrentamientos.value = ""
    contenido = ""
    contadorIntentos = 0
    gano = 0
    perdio = 0
    empate = 0
    document.getElementById("pantalla").innerHTML = ""

    numeroEnfrentamientos.disabled = false
    botonAceptar.disabled = false
    botonPiedra.disabled = true
    botonPapel.disabled = true
    botonTijeras.disabled = true
    botonResultado.disabled = true

})

piedra.addEventListener("click", () => {

    if (contadorIntentos < numeroEnfrentamientos.value) {

        if (piedraPapelOTijeras[contadorIntentos] == optPiedra) {
            contadorIntentos += 1
            empate += 1
            alert("La maquina escogio PIEDRA: hubo un EMPATE")
        } else if (piedraPapelOTijeras[contadorIntentos] == optTijeras) {
            contadorIntentos += 1
            gano += 1
            alert("La maquina escogio TIJERAS: ¡¡GANASTE!! Esta ronda :3")
        } else if (piedraPapelOTijeras[contadorIntentos] == optPapel) {
            contadorIntentos += 1
            perdio += 1
            alert("La maquina escogio PAPEL: PERDISTE esta ronda :(")
        }

    }

    if (numeroEnfrentamientos.value - contadorIntentos == 0) {
        botonPiedra.disabled = true
        botonPapel.disabled = true
        botonTijeras.disabled = true
        botonResultado.disabled = false
    }
})


papel.addEventListener("click", () => {

    if (contadorIntentos < numeroEnfrentamientos.value) {

        if (piedraPapelOTijeras[contadorIntentos] == optPapel) {
            contadorIntentos += 1
            empate += 1
            alert("La maquina escogio PAPEL: hubo un EMPATE")
        } else if (piedraPapelOTijeras[contadorIntentos] == optPiedra) {
            contadorIntentos += 1
            gano += 1
            alert("La maquina escogio PIEDRA: ¡¡GANASTE!! Esta ronda :3")
        } else if (piedraPapelOTijeras[contadorIntentos] == optTijeras) {
            contadorIntentos += 1
            perdio += 1
            alert("La maquina escogio TIJERAS: PERDISTE esta ronda :(")
        }

    }

    if (numeroEnfrentamientos.value - contadorIntentos == 0) {
        botonPiedra.disabled = true
        botonPapel.disabled = true
        botonTijeras.disabled = true
        botonResultado.disabled = false
    }
})

tijeras.addEventListener("click", () => {

    if (contadorIntentos < numeroEnfrentamientos.value) {

        if (piedraPapelOTijeras[contadorIntentos] == optTijeras) {
            contadorIntentos += 1
            empate += 1
            alert("La maquina escogio TIJERAS: hubo un EMPATE")
        } else if (piedraPapelOTijeras[contadorIntentos] == optPapel) {
            contadorIntentos += 1
            gano += 1
            alert("La maquina escogio PAPEL: ¡¡GANASTE!! Esta ronda :3")
        } else if (piedraPapelOTijeras[contadorIntentos] == optPiedra) {
            contadorIntentos += 1
            perdio += 1
            alert("La maquina escogio PIEDRA: PERDISTE esta ronda :(")
        }

    }

    if (numeroEnfrentamientos.value - contadorIntentos == 0) {
        botonPiedra.disabled = true
        botonPapel.disabled = true
        botonTijeras.disabled = true
        botonResultado.disabled = false
    }
})

botonResultado.addEventListener("click", () => {
    if (gano > perdio && gano >= empate) {
        contenido += `<br><br><table style="background-color:#90c3f7"><th>  Felicidades GANASTE el encuentro, Con un total de ${gano} rondas ganas  </th></table>`
    } else if (perdio > gano && perdio >= empate) {
        contenido += `<br><br><table style="background-color:#90c3f7"><th>  Lo siento PERDISTE el encuentro, Con un total de ${perdio} rondas perdidas  </th></table>`
    } else if ((empate >= gano && empate >= perdio) || gano == perdio) {
        contenido += `<br><br><table style="background-color:#90c3f7"><th>  Hubo un EMPATE, Con un total de ${contadorIntentos} rondas jugadas  </th></table>`
    }

    document.getElementById("pantalla").innerHTML = contenido

    botonResultado.disabled = true
})