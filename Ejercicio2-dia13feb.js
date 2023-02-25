/* 1.Crear una calculadora que pida 2 numeros en pantalla y realice un menu con las opciones de suma, resta, multiplciacion y division*/ */

/*let num1 =+prompt("Digita el primer numero")
let num2 =+prompt("Digita el segundo numer")
let opcion = parseInt(prompt(`
1. Sumar
2. Restar
3. Multiplicar
4. Dividir

Escoge una opcion`))

switch(opcion){
	case 1:
  	    console.log(`La suma es ${num1+num2}`)
        break
    case 2:
  	    console.log(`La resta es ${num1-num2}`)
        break
    case 3:
  	    console.log(`La multiplicacion es ${num1*num2}`)
  	    break
    case 4:
  	    num2==0 ? console.log(`No se puede dividir entre ${num2}`) : console.log(`La division es ${num1/num2}`)
        break
    default:
  	    console.log(`Error: opcion no valida`)
}*/

/* 2.Se requiere un algoritmo para facturar llamadas telefonicas. El valor del minuto depende del tipo de llamada, asi:
local = $50, regional = $100, larga distancia nacional = $500, larga distancia internacional = $700, a celular = $200. 
Las llamadas de tipo regional y larga distancia nacional tienen un descuento del 5% si su duracion es de 5 min o mas. */

/* //opcion1 
let tiempo =+prompt("Digita cuantos minutos duro la llamada")
let opcion = parseInt(prompt(`
1. Fijo Nacional
2. Fijo Internacional
3. Celular

Escoge una opcion`))

switch(opcion){
    case 1:
        var tipoLlamada = parseInt(prompt(`
        1. Local
        2. Regional
        3. Larga distancia Nacional
        
        Escoge una opcion`))
        switch(tipoLlamada){
            case 1:
                console.log(`El valor total de la llamada es de ${tiempo*50}`)
                break
            case 2:
                if(tiempo >= 5){
                    descuento = (tiempo*100)*0.05
                    console.log(`El valor total de la llamada es de ${(tiempo*100)-descuento}`)
                }else {
                    console.log(`El valor total de la llamada es de ${tiempo*100}`)
                }
                break
            case 3:
                if(tiempo >= 5){
                    descuento = (tiempo*500)*0.05
                    console.log(`El valor total de la llamada es de ${(tiempo*500)-descuento}`)
                }else {
                    console.log(`El valor total de la llamada es de ${tiempo*500}`)
                }
                break
            default:
                console.log("Error: opcion no valida")
        }
        break
    case 2:
        console.log(`El valor total de la llamada es de ${tiempo*700}`)
        break
    case 3:
        console.log(`El valor total de la llamada es de ${tiempo*300}`)
        break
}*/

/* // opcion2
let tiempo =+prompt("Digita cuantos minutos duro la llamada")
let opcion = parseInt(prompt(`
1. Local
2. Regional
3. Nacional
4. Internacional
5. Celular

Escoge una opcion`))

switch(opcion){
    case 1:
    	console.log(`El valor total de la llamada es de ${tiempo*50}`)
      break
    case 2:
      if(tiempo >= 5){
      	descuento = (tiempo*100)*0.05
        console.log(`El valor total de la llamada es de ${(tiempo*0.95)-descuento}`)                
      } else {
        	console.log(`El valor total de la llamada es de ${tiempo*100}`)
        }
       break
     case 3:
       if(tiempo >= 5){
       	descuento = (tiempo*500)*0.05
        console.log(`El valor total de la llamada es de ${(tiempo*500)-descuento}`)
       } else {
         console.log(`El valor total de la llamada es de ${tiempo*500}`)
       }
       break     
    case 4:
        console.log(`El valor total de la llamada es de ${tiempo*700}`)
        break
    case 5:
        console.log(`El valor total de la llamada es de ${tiempo*200}`)
        break
    default:
       console.log("Error: opcion no valida")
}*/

/* 3.En la universidad Buena Nota se requiere un algoritmo para calcular la nota definitiva y decidir si el estudiante aprueba o reprueba la asignatura. 
La nota final se obtiene a partir de dos notas parciales y un examen final, donde el primer parcial equivale al 30%, el segundo parcial al 30% y el examen final al 40%, 
y la nota mínima aprobatoria es 3.0. Si el promedio de los dos parciales es menor a 2.0, el estudiante no puede presentar examen final y pierde 
la materia por bajo promedio, en este caso la nota definitiva es el promedio de los parciales, si el promedio es igual o superior a 2.0 puede presentar el examen final. 
Si la nota del examen final es inferior a 2.0, se desconoce (no se toma en cuenta) las notas de los parciales y la nota definitiva es la obtenida en el examen final.
Si la nota es igual o superior a 2.0 se calcula la nota definitiva aplicando los porcentajes mencionados a los parciales y al final.
Si la nota definitiva es igual o superior a 3.0 el estudiante aprueba la asignatura; si es inferior a 3.0 pierde la materia; sin embargo, 
puede habilitarla, siempre y cuando en el examen final obtenga nota mayor o igual a 2.0, en este caso la nota definitiva será la que obtenga en la habilitación. */

let parcial1 = parseFloat(prompt("Digita la nota del primer parcial"))
while (parcial1 < 0 | parcial1 > 5) {
    parcial1 = parseFloat(prompt("La nota del parcial debe estar en el rango de 0.0 a 5.0"))
}
let parcial2 = parseFloat(prompt("Digita la nota del segundo parcial"))
while (parcial2 < 0 | parcial2 > 5) {
    parcial2 = parseFloat(prompt("La nota del parcial debe estar en el rango de 0.0 a 5.0"))
}

var promedioParciales = ((parcial1 + parcial2) / 2).toFixed(2)

if (promedioParciales < 2.0) {
    console.log(`La nota definitiva es ${promedioParciales}`)
    bandera1 = 1
}

if (promedioParciales >= 2.0) {
    let examenFinal = parseFloat(prompt("Digita la nota del examen Final"))
    while (examenFinal < 0 | examenFinal > 5) {
        examenFinal = parseFloat(prompt("La nota del parcial debe estar en el rango de 0.0 a 5.0"))
    }
    let notaDefinitiva = ((parcial1 * 0.30) + (parcial2 * 0.30) + (examenFinal * 0.40)).toFixed(2)
    if (notaDefinitiva >= 3.0) {
        console.log(`APRUEBA la asignatura con una nota definitiva de ${notaDefinitiva}`)
    } else if (notaDefinitiva < 3.0) {
        console.log(`REPRUEBA la asignatura con una nota definitiva de ${notaDefinitiva}`)
    }
    if (notaDefinitiva < 3.0 & examenFinal >= 2.0) {
        let habilitacion = parseFloat(prompt("Digita la nota de la habilitacion"))
        while (habilitacion < 0 | habilitacion > 5) {
            habilitacion = parseFloat(prompt("La nota del parcial debe estar en el rango de 0.0 a 5.0"))
        }
        console.log(`La nota definitiva es de ${habilitacion}`)
    }
}