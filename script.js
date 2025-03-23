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

const palavracomvogal = prompt("digite uma palavra ai");
function contarVogais(str) {
    
    const vogais = 'aeiouAEIOU';
    let quantidade = 0;

    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            quantidade++;
        }
    }

    return quantidade;
}
contarVogais(palavracomvogal)
console.log(contarVogais(palavracomvogal));

let quantiarray = prompt("Quantos números você quer colocar na array")
let arraysoma = 0;
function somaArray(str){
    let total = 0;
    for( let i = 0; i >= str; i++){
        arraysoma[i] = prompt("Fala um número")

    }
    for( let i = 0; i >= str; i++){
        total = total + arraysoma[1];
        
    }
    console.log(total)
}
somaArray(quantiarray)

let number = prompt("Fala um número por gentileza")
function dobrarNumero(){
    let dobro = number * 2;
    console.log(dobro)
}
dobrarNumero(number)

let contador = 2;
while(contador <= 20){
    if(contador % 2 == 0){
        console.log(contador)
    }
    contador++;
}


let palavra2 = prompt("Fala uma palavra")
function capitalizar(str){
    let transformar = str[0].toUpperCase() + str.substr(1);
    console.log(transformar)
}
capitalizar(palavra2)

let ano = prompt("Fala um ano ai")
function anoBissexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        return true;
    }
    else{
        return false;
    }
}
anoBissexto(ano)