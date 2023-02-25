/*1.Rellena un array con los numeros del 10 al 20, usando el metodo PUSH y un ciclo FOR.
Luego muestre en el HTML, el contenido del array */

/*const numeros = []

for(i=10;i<=20;i++){
    numeros.push(i)
}
document.write(numeros)*/

/*2.Rellena un array con numeros aleatorios(por ejemplo del 1 al 10), mostrar el resultado en consola */

/*const numeros = []

for(i=1;i<10;i++){
    numeros.push(i*10)
}

document.write(numeros)*/

/*3.Sumar los valores del siguiente arreglo, numneros=[33,55,77,81,48] mostrar al final del programa los numeros en forma de lista y el resultado de la suma */

const numeros = [33,55,77,81,48]
    let mitad = 0
    let suma = 0

    for(i=0;i<numeros.length;i++){    
        suma += numeros[i]
        mitad=Math.floor(numeros.length/2)
        if(i!=mitad){
        document.write(numeros[i])
        }
        if(i==mitad){
        document.write(`${numeros[i]}  + `)
        }
    
}
    document.write("-------")
    document.write(suma)