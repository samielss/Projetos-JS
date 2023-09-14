0//funções avançadas
function returnName (nome){
    return nome
}
//executando a função
console.log(`Olá ${returnName("Samuel")}`)
//função como uma experessão 
const area = function (a,b) {return a*b}    
let x = area(10,20)
console.log(`A área é ${x}`)

//Arrow function ou função de seta
const e = (num1) => {
    return num1*num1
}
console.log(`A raiz de 10 é ${e(10)}`) 

//Funções predefinidas
let seno = Math.sin(30)
let quad = Math.sqrt(4)
let aleatorio = Math.random()

console.log(`${seno}`)
console.log(`${quad}`)
console.log(`${aleatorio}`)