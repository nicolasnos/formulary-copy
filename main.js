let psw = document.getElementById("password")
let user = document.getElementById("email")


const enter = document.getElementById("login")
enter.addEventListener("click", check)

function check(){
    let valor1 = false
    let valor2 = false

    if (user.value === "michael@gmail.com"){
         valor1 = true
         rEmail.innerHTML = ""
    } 
    else {
        rEmail.innerHTML = "usuario invalido, pruebre de nuevo" 
    }

    if (psw.value === "perro123"){
         valor2 = true
         rPass.innerHTML = ""
    } 
    else {
        rPass.innerHTML = "password invalido, pruebre de nuevo" 
    }

    if (valor1 && valor2 == true){
        rf.innerHTML = "OK"
    }
    else {rf.innerHTML = "hay algo mal, revisalo"}
}


let rEmail = document.getElementById("r1")
let rPass = document.getElementById("r2")
let rf = document.getElementById("rf")