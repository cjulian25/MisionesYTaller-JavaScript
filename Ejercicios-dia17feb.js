let usuarios = ["Austin", "Tasha", "Uniqua"]
let password = ["123456", "contraseña", "qwerty"]

usuarios.lower()
let usuario 
let contador = 3

for(i=0;i<3;i++){
    usuario = prompt("Digita tu usuario")
    while(usuario==""){
        usuario = prompt("Digita tu usuario")
    }
    contrasenia = prompt("Digita tu contraseña")
    for(j=0;j<password.length;i++){
        if(contrasenia==password[j]){
            document.write("Logueando...")
            break
        }
        if(contrasenia!=password[j]){
            contador -=1
            document.write(`Datos incorrectos: te quedan ${contador} intentos`)
        }
    }
}