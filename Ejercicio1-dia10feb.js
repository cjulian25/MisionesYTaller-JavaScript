/* const num1 = 3
var texto = "Julian"
let num2 = 5

console.log("Holis")
console.log(texto)
console.log(num1+num2)

if(num1 === "3"){
  console.log("obviusly")
}else if(num1 === 3){
  console.log("ay caramba")
}else{
  console.log("obviusly not")
  }

let edad = parseInt(prompt("Digita tu edad: "))
console.log(edad) */

/* 1. Desarrolle un algoritmo que permita leer numeros enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta*/

/* let num1 = parseInt(prompt("Digita el primer numero"))
let num2 = parseInt(prompt("Digita el segundo numero"))
let num3 = parseInt(prompt("Digita el tercer numero"))

if(num1 == num2 | num1 == num3 | num2 == num3){
  console.log("Digitaste dos o mas numeros iguales")
  } else if(num1 > num2 & num1 > num3){
  console.log(`El numero mayor es: ${num1}`)
  } else if(num2 > num1 & num2 > num3){
  console.log(`El numero mayor es: ${num2}`)
  } else if(num3 > num1 & num3 > num2){
  console.log(`El numero mayor es: ${num3}`)
  }
if(num1 < num2 & num1 < num3){
  console.log(`El numero menor es: ${num1}`)
  } else if(num2 < num1 & num2 < num3){
  console.log(`El numero menor es: ${num2}`)
  } else if(num3 < num1 & num3 < num2){
  console.log(`El numero menor es: ${num3}`)
 } */

/* 2. Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo debe 
calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la base 
multiplicado por 2 y sumarle 10. */

/* let base = parseFloat(prompt("Digita la base del triangulo"))
let altura = parseFloat(prompt("Digita la altura del triangulo"))

while(base == altura){
  altura = parseFloat(prompt("Los numeros no pueden ser iguales, vuelve a digitar la altura del triangulo"))
  }
if(base > 5 & altura > 4){
  console.log(`El area del triangulo es: ${(base*altura)/2}`)
  } else{
  console.log(`${(base*2)+10}`)
  }  */

/* 3. Desarrolle un algoritmo que reciba un numero entero y escriba si dicho numero es par o impar */

/* let num = parseInt(prompt("Digita un numero entero"))

if(num%2 == 0){
	console.log(`El numero ${num} es par`)
  } else{
	console.log(`El numero ${num} es impar`)
  } */

/* 4. Desarrolle un algoritmo que permita convertir calificaciones numericas, segun la siguiente tabla:
A = 19 y 20
B = 16, 17, 18
C = 13, 14, 15
D = 10, 11 Y 12
E = 1 hasta 9
Las notas solo pueden  ser numeros entre 1 y 20 */

/* t num = parseInt(prompt("Digita un numero entre 1 y 20"))
let letra = ""

while(num<1 | num>20){
  num = parseInt(prompt("Digita un numero entre 1 y 20"));
}

if(num==19 & num==20){
  letra = "A"
  } else if(num>=16 & num<=18){
    letra = "B"
  } else if(num>=13 & num<=15){
    letra = "C"
  } else if(num>=10 & num<=12){
    letra = "D"
  } else{
    letra = "E"
  }
console.log(letra) */

/* 5. Pedir dos numeros y decir si son multiplos o no. */

/* let num1 = parseInt(prompt("Digita un numero"))
let num2 = parseInt(prompt("Digita otro numero"))

if(num1 > num2){
  let division1 = num1%num2
  if(division1 == 0){
    console.log(`El numero ${num1} es multiplo de ${num2}`)
  } else if(division1 != 0){
      console.log(`Los numeros no son multiplos`)
    }
}
else if(num2 > num1){
  let division2 = num2%num1
  if(division2 == 0){
    console.log(`El numero ${num2} es multiplo de ${num1}`)
  } else if(division2 != 0){
      console.log(`Los numeros no son multiplos`)
    }
} */

/* 6. Pedir un numero y decir si es un numero negativo, si es positivo o cero. */

/* let num = parseInt(prompt("Digita un numero"))
let texto = ""

if(num==0){
  texto = "Es cero"
} else if(num > 0){
  texto = "Es positivo"
} else{
  texto = "Es negativo"
}
console.log(texto)
 */

/*7.  Pedir tres numeros enteros con un valor del 1 al 10, sacar el promedio de los tres numeros y mostrar
True si el promedio es mayor a 5 en caso contrario mostrar Flase, utilizar el operador ternario.*/

/*let sumatoria = 0
let promedio = 0

for(var i = 0; i < 3; i++){
  let num = parseInt(prompt(`Digita el ${i+1}° numero`))
  while(num < 1 | num > 10){
    num = parseInt(prompt(`El ${i+1}° numero debe estar entre un rango del 1 al 10`))
  }
  sumatoria += num
  promedio = sumatoria/3
}

promedio>5 ? console.log(`True`) : console.log(`False`) */

/*8. Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar. 
Ademas el numero debe ser positivo*/