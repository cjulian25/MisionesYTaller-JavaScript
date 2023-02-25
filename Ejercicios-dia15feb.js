/*1.Hacer un algoritmo para calcular resto(mod) y cociente(trunc o div) solo por medio de restas sucesivas */

let dividendo = parseInt(prompt("Digita el dividendo"))
let divisor = parseInt(prompt("Digita el divisor"))
if(divisor==0){
    alert("La division entre 0 no es valida")
}else{
while(dividendo>=divisor){
contador +=1
dividendo -= divisor
}
}
console.log(`residuo=${dividendo}, cociente=${contador}`)