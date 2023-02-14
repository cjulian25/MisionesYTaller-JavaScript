/*1. Realizar un programa que imprima 25 terminos de la serie 11 - 22 - 33 - 44 etc. No se ingresan valores por teclado */

//solucion1

/*let x=0

for(i=1; i<= 25; i++){
    console.log(x+11)
    x +=11
}*/

//solucion 2

/*for(i=0; i<=25; i++){
    console.log(i*11)
}*/

/*2.Mostrar los multiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8-16-24...500*/

//Solucion1
/*for(i=8; i<500; i+=8){
    console.log(i)
}*/

//Solucion2
/*let num = 8

while(num<500){
	console.log(num)
    num +=8
}*/

/*3.Dados dos numeros, devolver los numeros pares que existen entre si */

/*let num1 = parseInt(prompt("Digita un numero"))
let num2 = parseInt(prompt("Digita otro numero"))

if(num1>num2){
    for(i=num2;i<=num1;i++){
        if(i%2 == 0){
	        console.log(i)
        }
    }
}

if(num2>num1){
    for(i=num1;i<=num2;i++){
        if(i%2 == 0){
	        console.log(i)
        }
    }
}*/

/*4. Realizar un programa que acumule(sume) valores ingresados por teclado hasta ingresar el 9999(no sumar dicho valor, solamente indica que ha 
finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero , mayor a cero, menor a cero. */

/*let num = parseInt(prompt("Digita un numero"))
let suma = 0
    
while(num!=9999){
    suma += num
    num = parseInt(prompt("Digita un numero"))
}
if(suma==0){
    console.log(`La suma da un valor igual a ${suma}`)
    } else if(suma>0){
        console.log(`La suma da un valor superior a 0 con un total de ${suma}`)
    } else{
        console.log(`La suma da un valor inferior a 0 con un total de ${suma}`)
}*/

/*5. Algoritmo que lea numeros enteros hasta teclear 0, y nos muestre el maximo, minimo y la media de todos ellos. */

/*let num = parseInt(prompt("Digite un numero"))
let max = -999999999999999999
let min = 9999999999999999999
let suma = 0
let contador = 0

while(num!=0){
    suma += num
    console.log(num)

if(num>=max && num!=0){
    max = num
} 
if (num<=min && num!=0){
    min = num
}

num = parseInt(prompt("Digite un numero"))
contador +=1
}
console.log(0)
console.log(`El numero maximo es ${max} - El numero minimo es ${min} - La sumatoria es de ${suma} - El promedio es de ${(suma/contador).toFixed(2)}`)*/

/*6.Muestra los numeros del 1 al 100(ambos incluidos) divisibles entre 2 y 3. Utiliza el bucle que desees */

/*for(i=1;i<=100;i++){
    if(i%2==0 && i%3==0){
        console.log(i)
    }
}*/

/*7.Se desea validar una clave que sea 123456 hasta en tres oportunidades, debe indicar cuantos intentos lleva
y cuantos le restan.*/

let clave = 123456
let contador1 = 0
let contador2 = 3

for (i = 1; i <= 3; i++) {
    let dig = parseInt(prompt("Digita la clave"))
    if (dig == clave) {
        alert(`Logeando...`)
        break
    } else if (dig != clave) {
        contador1 += 1
        contador2 -= 1
    }
    alert(`Contrasela incorrecta: LLevas ${contador1} intentos, te quedan ${contador2} intentos para loguearte`)
}