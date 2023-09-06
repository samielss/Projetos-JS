//Contador
let contador = 0

while (contador < 10) {
    contador++
    console.log(contador)
}
let cont = 0
do {
    cont++
    console.log("Executando while...")
}while(cont < 20){
    console.log(cont)
}
//Média alunos
let i, soma, num, n
soma = 0
n = 5
for ( i = 0; i < 5; i++){
    num = 9
    soma = soma + num
}
console.log(`Total de ${n} elementos, resultará na soma ${soma} `)
//Linha e Coluna
let L, C
for(L = 0; L<2; L++){
    for(C = 0; C < 2; C++){
        console.log(`Linha ${L} | coluna ${C}`)
    }
}