// 1. Se desea llenar una lista con 20 animales, y le han pedido a usted que sabe
// programar que les ayude para solicitar esos 20 nombres, mostrarlos ordenados
// alfabéticamente, Luego solicitar al usuario un número entre el 1 y el 20 y que le
// permita ver cuales animales se encuentra entre el número dicho y el final de la
// lista. También cree una opción que permita al usuario escribir el nombre de un
// animal y verificar si ese animal se encuentra en la lista. Con un menú para hacer
// cada tarea

// const nomAnimal = document.getElementById("animal")
// const number = document.getElementById("digNum")
// const buscar = document.getElementById("buscartext")

// const animales = []

// registrar.addEventListener("click", () => {
//     let animal = nomAnimal.value

//     if (animal == "") {
//         alert("El campo esta vacio")
//     } else {
//         animales.push(animal)
//         animales.sort()

//         nomAnimal.value = ""
//     }
// })

// visualizar.addEventListener("click", () => {

//     animales.sort()
//     let contenido = `<table><th>Animales</th>`

//     let animal = animales.forEach(animal => {
//         contenido += `<tr><td>${animal}</td></tr>`
//     })
//     contenido += `</table>`
//     document.getElementById("pantalla").innerHTML = contenido
// })

// numero.addEventListener("click", () => {
//     let num = number.value

//     if (num == "" || num <= 0) {
//         alert("Numero no valido")
//     } else {
//         let contenido = `<table><th>Animales</th>`
//         for (i = (num - 1); i < animales.length; i++) {
//             contenido += `<tr><td>${animales[i]}</td></tr>`
//         }
//         contenido += `</table>`
//         document.getElementById("pantalla").innerHTML = contenido


//     }
//     number.value = ""
// })

// buscarbutt.addEventListener("click", () => {
//     let lookFor = buscar.value

//     if (lookFor == "") {
//         alert("El campo esta vacio")
//     } else {
//         let contenido = `<table><th>Animales</th>`
//         if (animales.includes(lookFor) == true) {
//             contenido += `<tr><td>${lookFor}</td></tr>`
//         } else {
//             contenido += `<tr><td>El animal no esta en la lista</td></tr>`
//         }
//         contenido += `</table>`
//         document.getElementById("pantalla").innerHTML = contenido
//         buscar.value = ""
//     }

// })

// 2. Dado el siguiente arreglo=[1,0,4,8,5,7,6,8,7,5,6,4,3,1,9,2], dar la opción al
// usuario de indicar un número a buscar y mostrar la posición en que se encuentra
// un número por primera vez y por última vez dentro del arreglo.

// const arreglo = [1, 0, 4, 8, 5, 7, 6, 8, 7, 5, 6, 4, 3, 1, 9, 2]

// const numDigitado = document.getElementById("numero")

// buscar.addEventListener("click", () => {

//     let num = parseInt(numDigitado.value)    

//     if (num > 9 || num < 0) {
//         alert("El numero igresado debe estar en el rango de 0 a 9")
//         numDigitado.value = ""
//     } else {
//         let contenido = ""
//         primero = arreglo.indexOf(num)
//         if (primero >= 0) {
//             contenido += `El numero ${num} se encuentra por primera vez en la posicion ${primero} del array <br><br>`
//         } else {
//             contenido += `El numero ${num} no se encuentra dentro del array`
//         }

//         segundo = arreglo.lastIndexOf(num)
//         if (segundo >= 0) {
//             contenido += `El numero ${num} se encuentra por ultima vez en la posicion ${segundo} del array <br>`
//         } else {
//             contenido += `El numero ${num} no se encuentra dentro del array`
//         }

//         document.getElementById("pantalla").innerHTML = contenido
//         numDigitado.value = ""
//     }

// })

// 3. Dado el siguiente arreglo=[1,0,4,8,5,7,6,8], permitir al usuario indicar la posición 
// en la que se quiere insertar un nuevo elemento y el elemento a insertar.

// const numDigitado = document.getElementById("numero")
// const posDigitada = document.getElementById("posicion")

// insertar.addEventListener("click", () => {

//     let num = numDigitado.value
//     let pos = posDigitada.value

//     if (pos < 0) {
//         alert("El numero digitado esta fuera de rango")
//         numDigitado.value = ""
//         posDigitada.value = ""
//     } else {
//         let arreglo = [1, 0, 4, 8, 5, 7, 6, 8]
//         arreglo.splice(pos, 0, num)

//         document.getElementById("pantalla").innerHTML = arreglo
//         numDigitado.value = ""
//         posDigitada.value = ""
//     }
// })

// 4. Solicitar un listado N de nombres ingresándolos por teclado, almacenarlos en 
// un array, mostrarlos en el orden en que fueron ingresados y luego mostrarlos 
// en orden alfabético. Debe permitir observar las 2 listas por separado.

// const number = document.getElementById("numero")
// const nombre = document.getElementById("nombre")

// const arreglo = []
// const arregloOrdenado = []
// var contador = 0

// aceptar.addEventListener("click", () => {

//     let num = number.value

//     if (num <= 0) {
//         alert("Debes ingresar un numero entero superior a 0")
//         number.value = ""
//     } else {
//         nombre.disabled = false
//     }
// })

// ingresar.addEventListener("click", () => {

//     if (contador == number.value) {
//         nombre.disabled = true
//         nombre.value = ""
//     } else {
//         let name = nombre.value
//         if (name == "") {
//             alert("El campo esta vacio")
//             nombre.value = ""
//         } else {
//             arreglo.push(name)
//             arregloOrdenado.push(name)
//             contador += 1
//         }
//         nombre.value = ""
//     }
// })

// mostrar.addEventListener("click", () => {
//     let contenido = `<table><th>NOMBRES</th>`
//     let name = arreglo.forEach(name => {
//         contenido += `<tr><td>${name}</td></tr>`
//     })
//     contenido += `</table>`
//     document.getElementById("pantalla").innerHTML = contenido
// })

// ordenado.addEventListener("click", () => {
//     arregloOrdenado.sort()
//     let contenido = `<table><th>NOMBRES</th>`
//     let name = arregloOrdenado.forEach(name => {
//         contenido += `<tr><td>${name}</td></tr>`
//     })
//     contenido += `</table>`
//     document.getElementById("pantalla").innerHTML = contenido
// })

// 5. La escuela, PequeñosGamberros, quiere almacenar los datos de sus N 
// estudiantes: Nombre, Curso, Genero. Quiere también registrar las notas de las 
// 3 materias de esos estudiantes. Luego imprimir el nombre de los estudiantes con 
// el promedio de sus notas y mostrar quienes aprobaron y quienes no. Un 
// estudiante aprueba, si el promedio de sus notas, es >=3.5. Debe tenerse en 
// cuenta que las notas deben estar entre 0 y 5. (usando array de objetos)

// const numeroEstud = document.getElementById("numEstudiantes") 
// const nombreEstud = document.getElementById("nomEstudiante")
// const cursoEstud = document.getElementById("curso")
// const generoEstud = document.getElementById("genero")
// const nota1Estud = document.getElementById("nota1")
// const nota2Estud = document.getElementById("nota2")
// const nota3Estud = document.getElementById("nota3")

// const listadoEstudiantes = []
// var contador = 0
// var estadoEstud = ""
// var promedioEstud = 0

// aceptar.addEventListener("click", () => {
//     if(numeroEstud.value<=0){
//         alert("Debes ingresar un numero positivo superior a 0")
//         numeroEstud.value = ""
//     }else{
//         nombreEstud.disabled = false
//         generoEstud.disabled = false
//         cursoEstud.disabled = false
//         nota1Estud.disabled = false
//         nota2Estud.disabled = false
//         nota3Estud.disabled = false
//     }
// })

// registrar.addEventListener("click", () => {
//     if(contador >= numeroEstud.value){
//         nombreEstud.disabled = true
//         cursoEstud.disabled = true
//         generoEstud.disabled = true
//         nota1Estud.disabled = true
//         nota2Estud.disabled = true
//         nota3Estud.disabled = true
//         nombreEstud.value = ""
//         cursoEstud.value = ""
//         generoEstud.value = ""
//         nota1Estud.value = ""
//         nota2Estud.value = ""
//         nota3Estud.value = ""
//     } else {
//         if(nota1Estud.value<0 || nota1Estud.value>5 || nota1Estud.value=="" || nota2Estud.value<0 || nota2Estud.value>5 || nota2Estud.value=="" || nota3Estud.value<0 || nota3Estud.value>5 || nota3Estud.value==""){
//             alert("Error al ingresar la nota, los valores deben estar entre 0 y 5")
//             nota1Estud.value = ""
//             nota2Estud.value = ""
//             nota3Estud.value = ""
//         } else{
//             promedioEstud = (parseFloat(nota1Estud.value) + parseFloat(nota2Estud.value) + parseFloat(nota3Estud.value))/3
//             if(promedioEstud >= 3.5){
//                 estadoEstud = "APROBADO"
//             } else{
//                 estadoEstud = "REPROBADO"
//             }

//             listadoEstudiantes.push({
//             nombre: nombreEstud.value,
//             curso: cursoEstud.value,
//             genero: generoEstud.value,
//             notas:{nota1: nota1Estud.value,
//                 nota2: nota2Estud.value,
//                 nota3: nota3Estud.value},
//             promedio: promedioEstud,
//             estado: estadoEstud
//             })
//             nombreEstud.value = ""
//             cursoEstud.value = ""
//             generoEstud.value = ""
//             nota1Estud.value = ""
//             nota2Estud.value = ""
//             nota3Estud.value = ""
//             contador += 1
//         }
//     }
// })

// mostrar.addEventListener("click", () => {
//     let contenido = `<table><th>NOMBRES</th><th>PROMEDIO</th><th>ESTADO</th>`
//     let estudiante = listadoEstudiantes.forEach(estudiante => {
//         contenido += `<tr><td>${estudiante.nombre}</td><td>${estudiante.promedio}</td><td>${estudiante.estado}</td></tr>`
//     })
//     contenido += `</table>`
//     document.getElementById("pantalla").innerHTML = contenido    
// })

// 6. Crear un programa con botones de opción. La opción 1 debe permitir cargar los 
// nombres de 5 alumnos de un curso y la nota de programación de cada uno de 
// ellos. La opción 2 mostrar la mayor nota y a que alumnos le correspondió esta 
// nota. La opción 3 mostrar el listado de los datos ingresados.

// const opcion = document.getElementById("opciones")
// const nombreEstudiante = document.getElementById("nombre")
// const notaEstudiante = document.getElementById("nota")
// const boton = document.getElementById("registrar")

// const listadoEstudiantes = []

// aceptar.addEventListener("click", () => {
//     if (opcion.value == "opcion1") {
//         nombreEstudiante.disabled = false
//         notaEstudiante.disabled = false
//         boton.disabled = false

//         document.getElementById("pantalla").innerHTML = ""
//     }

//     if (opcion.value == "opcion2") {
//         nombreEstudiante.disabled = true
//         notaEstudiante.disabled = true
//         boton.disabled = true

//         let contenido = `<table><th>NOMBRE</th><th>NOTA</th>`
//         if (listadoEstudiantes == "") {
//             contenido += `<tr><td>No hay estudiantes ingresados<td></tr>`
//         } else {
//             let notaMayor = Math.max(...listadoEstudiantes.map(item => item.nota))
//             console.log(notaMayor1)
//             let filtrado = listadoEstudiantes.filter(item => item.nota >= notaMayor)
//             filtrado.forEach(estudiante => {
//                 contenido += `<tr><td>${estudiante.nombre}</td><td>${estudiante.nota}</td></tr>`
//             });
//         }
//         contenido += `</table>`
//         document.getElementById("pantalla").innerHTML = contenido
//     }

//     if (opcion.value == "opcion3") {
//         nombreEstudiante.disabled = true
//         notaEstudiante.disabled = true
//         boton.disabled = true

//         let contenido = `<table><th>NOMBRE</th><th>NOTA</th>`
//         if (listadoEstudiantes == "") {
//             contenido += `<tr><td>No hay estudiantes ingresados<td></tr>`
//         } else {
//             listadoEstudiantes.forEach(estudiante => {
//                 contenido += `<tr><td>${estudiante.nombre}</td><td>${estudiante.nota}</td></tr>`
//             });
//         }
//         contenido += `</table>`
//         document.getElementById("pantalla").innerHTML = contenido
//     }
// })

// registrar.addEventListener("click", () => {

//     if (nombreEstudiante.value == "" || notaEstudiante.value == "") {
//         alert("Error: no pueden haber campos vacios")
//     }

//     if (notaEstudiante.value < 0 || notaEstudiante.value > 5) {
//         alert("La nota ingresada debe estar en los rangos de 0.0 a 5.0")
//         notaEstudiante.value = ""
//     } else {
//         listadoEstudiantes.push({
//             nombre: nombreEstudiante.value,
//             nota: notaEstudiante.value
//         })

//         nombreEstudiante.value = ""
//         notaEstudiante.value = ""
//     }
// })


// 7. Se tiene una lista de 5 estudiantes y el municipio de origen. Se requiere un
// algoritmo para guardar la lista en un arreglo y consultar los estudiantes que
// provienen de un municipio determinado.

// const nombreEstud = document.getElementById("nombre")
// const municipioEstud = document.getElementById("municipio")

// const listadoEstudiantes = []

// registrar.addEventListener("click", () => {
//     if (nombreEstud.value == "" || municipioEstud.value == "") {
//         alert("El campo esta vacio")
//     } else {
//         listadoEstudiantes.push({
//             estudiante: nombreEstud.value,
//             municipio: municipioEstud.value
//         })

//         nombreEstud.value = ""
//         municipioEstud.value = ""
//     }
// })

// buscar.addEventListener("click", () => {
//     let lookFor = filtro.value

//     if (lookFor == "") {
//         alert("El campo esta vacio")
//     } else {

//         let filtrado = listadoEstudiantes.filter(ubicacion => ubicacion.municipio == lookFor)
//         let contenido = `<table><th>NOMBRES</th>`

//         if (filtrado == "") {
//             contenido += `<tr><td>No se encontro a algun estudiante de ese municipio</td></tr>`
//         } else {
//             filtrado.forEach(item => {
//                 contenido += `<tr><td>${item.estudiante}</td></tr>`
//             })
//         }
//         contenido += `</table>`
//         document.getElementById("pantalla").innerHTML = contenido
//     }
// })

// 8. Buscar un elemento dentro de un arreglo llenado en forma aleatorio con números 
// entre 1 y 100. Indicar la posición donde se encuentra. Si hay más de uno, indicar 
// igualmente la posición.

const numero = document.getElementById("numeroInput")
const botonBuscar = document.getElementById("buscar")
numero.disabled = false
botonBuscar.disabled = false

var conteo = 0
const arregloIndices = []
const arreglo = []
for (i = 0; i < 100; i++) {
    arreglo.push(Math.ceil(Math.random() * (100)))
}

buscar.addEventListener("click", () => {
    numero.disabled = true
    botonBuscar.disabled = true
    let number = parseInt(numero.value)
    let contenido = ""
    if (numero.value == "") {
        alert("El campo esta vacio, debes digitar un numero")
    } else {
        if (arreglo.includes(number)) {
            arreglo.forEach(item => {
                if (item == number) {
                    conteo += 1
                }
            })
            for (i = 0; i < conteo; i++) {
                let indice = arreglo.indexOf(number)
                arregloIndices.push(indice)
                arreglo.splice(indice, 1, -1)
            }
            for (i = 0; i < conteo; i++) {
                arreglo.splice(arregloIndices[i], 1, number)
            }

            arregloIndices.forEach(item => {
                contenido += `${item} - `
            })
            document.getElementById("pantalla").innerHTML = `El numero ${number} esta en el(los) indice(s):  ${contenido}`

        } else {
            document.getElementById("pantalla").innerHTML = `El numero ${number} no se encuentra dentro del array`
            numero.value = ""
        }
    }
})

limpiar.addEventListener("click", () => {
    numero.disabled = false
    botonBuscar.disabled = false
    arregloIndices.splice(0, conteo)
    conteo = 0
    numero.value = ""
    document.getElementById("pantalla").innerHTML = ""
})