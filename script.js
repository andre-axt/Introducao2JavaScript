let numero = prompt("Fala um número")
function verificarSinal(str){
    if(str.includes("-") ){
        console.log(str, "é negativo")
    }
    if(str != str.includes("-")){
        console.log(str, "É positivo")
    }
    if(str == 0){
        console.log("zero")
    }
}
verificarSinal(numero);

