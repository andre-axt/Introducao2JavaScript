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
function verificarTamanho(str){
    if(str.length > 10){
        console.log("Essa palavra tem mais de dez caracteres")
    }
    else{
        console.log("Tem menos de dez letras")
    }
}
verificarTamanho(palavra);

let frutas = ["banana", "pessego", "melancia", "mamao", "uva"]
console.log(frutas[2]);

let nome = prompt("fala seu nome")
let saudacao1 = prompt("fala algo aio")
function saudacao(){
    console.log(nome + " " + saudacao1)
}
saudacao()

let nota = prompt("Fala a nota")
function verificarAprovacao(str){
    if(str >= 6){
        console.log("aprovado")
    }
    else{
        console.log("reprovado")
    }
}
verificarAprovacao(nota)

for(let num = 0; num <= 30; num++){
    if(num % 2 === 0){
        console.log(num)
    }
}

let numeros = ["1", "2", "3", "4"]
function somarArray(str){
    let soma = 0;
    let quantidade = str.length;
    for(let x = 0; x >= quantidade; x++){
        soma = soma + numeros[x];
    }
    console.log(soma)
}
somarArray(numeros)

let vogal = prompt("Fala uma palavra ai");
function contarVogais(str){
    let vogais = 0;
    let quantidade = str.length;
    let separar = str.split[""];

    for(let i = 0; i = quantidade; i++){
        if(separar[i].includes("a","e","i","o","u")){
            vogais = vogais + 1;
        }
    }
    console.log(vogais);
}
contarVogais(vogal);
