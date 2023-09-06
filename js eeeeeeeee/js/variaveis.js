//Declaração de variáveis
/*
const num1 = 20;
const num2 = "30";
const resp = num1 + num2;

console.log(typeof resp);*/


//Dois tipos de escopo
//Escopo do script 
//Usando let
let num1 = 20;
let num2 = 30;

let resp = num1 + num2;

console.log ("O valor da soma é",resp)
//Escopo da função
function valor(){
    let num1 = 30;
    console.log("O valor de num1 dentro da função: ",num1);
}
//executando função
valor();

console.log("Valor de num1 fora da função ",num1)

//Declarando variáveis com const
//Valor nunca muda


const pi = 3.14159265359;
let val = 50;

let resposta = val * pi;

console.log("A resposta é: ", resposta);
alert(resposta);
