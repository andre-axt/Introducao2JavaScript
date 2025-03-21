let numero = prompt("Fala um número")
function verificarSinal(str){
    if(str.includes("-") ){
        console.log(str, "é negativo")
    }
    if(str == 0){
        console.log("zero")
    }
    if(str > 0){
        console.log(str, "É positivo")
    }
}
verificarSinal(numero);

let celsius = prompt("Fala o celsius ai:")
function converterTemperatura(str){
    let fahrenheit = (str * 9/5) + 32;
    console.log(celsius + " em fahrenheit fica: " + fahrenheit)
}
converterTemperatura(celsius);

let i = 0;
let n = 0;
let c = 0;
while(i < 100){
    i = i + 1;
    n = n+1;
    c = c + n;
} 
console.log(c);

let frase = prompt("Fala uma coisa aleatoria ai que tenha azul")
function substituirPalavra(){
    if(frase.includes("azul")){
        frase = frase.replace(/azul/g, "vermelho");
        console.log(frase);
    }
    else{
        console.log("Não tem azul")
    }
}
substituirPalavra(frase);

let palavra = prompt("Fala uma palavra ai")
verificarTamanho(str){
    if(str.lenght < 10){
        console.log("Essa palavra tem menos de dez caracteres")
    }
    else{
        console.log("Tem mais de dez")
    }
}
verificarSinal(palavra)



