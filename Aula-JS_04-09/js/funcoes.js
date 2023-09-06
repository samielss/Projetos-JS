//Introduzindo funções no JavaScript
//criando uma função
function somaNumeros (){
    let num1, num2, resp
    num1 = 10;
    num2 = 20
    resp = num1 + num2
    console.log(`O resultado da soma é ${resp}`)
}
function mutiplicaNumeros (num3,num4){
    return (num3*num4)
}
//executando/utilizando uma função
somaNumeros();
console.log(`O resultado da mutiplicação será ${mutiplicaNumeros(20,30)}`)