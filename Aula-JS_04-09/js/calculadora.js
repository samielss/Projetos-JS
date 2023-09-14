//Calculadora
//Variáveis
let escolha, operacao
//Funções
function somaValores(num1,num2){
    return (num1+num2)
}
function subValores(num1,num2){
    return (num1-num2)
}
function mutiplicaValores(num1,num2){
    return (num1*num2)
}
function divideValores(num1,num2){
    return (num1/num2)
}
//Boas vindas ao usuario
console.log(`Calculadora`)
console.log(`Selecione 0uma operação \n1-Soma \n2-Subtração \n3-Mutiplicação \n4-Divisão \n5-Sair`)
console.log(`Selecione dois números`)
//Operações
escolha = 2
num1=2
num2=3
cons
if(escolha==1){
    operacao = "Soma"
    result=somaValores(num1,num2)
}
else if(escolha==2){
    operacao = "Subtração"
    result=subValores(num1,num2)
}
else if(escolha==3){
    operacao = "Mutiplicação"
    result=mutiplicaValores(num1,num2)
}
else if(escolha==4){
    operacao = "Divisão"
    result=divideValores(num1,num2)
}
else{
    console.log(`Operação inválida`)
}
//Resultado
console.log(`Você selecionou a ${operacao} de ${num1} e ${num2} e o resultado foi ${result}`)
//Usuário
