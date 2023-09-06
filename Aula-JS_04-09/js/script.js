//Tipos de console.log
console.log("Alguma coisa em aspas duplas")
console.log('Alguma coisa em apostrofo')
let variavel = 20;
let nome = 'Senac';
console.log(nome);
nome = 10
console.log(nome);
//Console.log em crase é usado com variavel
console.log(`Alguma coisa puxando variavel ${variavel} `)

//Escopo de uma função
function somaValor(){
    let valor;
    valor = 10;
    console.log(valor);
}
somaValor();

//Declarando varável com let e const

//declaração das variáveis
let cpf, email, telefone;

//inicializar as variáveis
email = 'sac@sp.senac.br';
telefone =  1137837834;
cpf = "817.256.645.22";

console.log("Seu email é:", email);
console.log("Seu CPF é: ", cpf)
console.log(`Seu telefone é: ${telefone}`)

//const é uma variável que o seu valor não muda em tempo de execução
const pi = 3.14159265358979323846;
console.log(`Valor do pi é ${pi}`)
//arrowfunction
const subtrairValor = () => {

}
const meuNome = "Samu"
console.log (`Meu nome é ${meuNome}`)

const primeiroNome = "Pedro"
const segundoNome = "Silva"
console.log (`${primeiroNome} ${segundoNome}`)

//Operadores
let num1, num2, resp=0;
num1=20
num2=10

resp = num1 + num2;
console.log(resp)
resp = num1 - num2;
console.log(resp)
resp = num1 * num2;
console.log(resp)
resp = num1 / num2;
console.log(resp)
resp = num1 % num2;
console.log(resp)

//Expressões em js
let a = 3

let x = (100+50) * a
console.log(`O valro da expressão é ${x}`)

//Operadores de incremento e decremento

let z = 5;
//incrementando o z++ é igual z=z+1
z++
let y = z;
console.log(`Valor de y: ${y}`)


let w = 5;

//decrementando o w-- é igual w=w-1
w--;
let n = w;
console.log(`Valor de y: ${w}`)

//exponenciação
let exp = 5;
let op = exp ** 2;
let mat = Math.pow(exp, 2)
console.log(`Exponenciação ${op}`)
console.log(`Exponenciação com Math ${mat}`)

//Operadores de Atribuição JavaSript

let r = 10;

let s = 10 + r;
console.log(`Valor de s: ${r}`)

let m = 10-r
console.log(m)

//Operadores relacionais que retonam true/false
//Operador lógico
let p=true;
let q=false;
//Operador and só vai ser verdadeiro se os dois lados forem verdadeiros
let v = p && q;
console.log(v)
//operador ou vai ser verddeiro quando um dos lados ou os dois forem verdadeiros
let i = p || q;
console.log(v)

//Variáveis do tipo objeto
const pessoa = {
    name:"Samuquinha" ,
    lastName: "Largo Treze"
};
console.log(`O nome da pessoa é ${pessoa.name} e seu sobrenome é ${pessoa.lastName}`)

//Variáveis do tipo array
const car = [
    "WV",
    "Ford",
    "Chevrolet"
]
console.log(`O carro escolhido ${car[2]}`)
