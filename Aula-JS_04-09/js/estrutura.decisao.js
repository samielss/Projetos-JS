//Estrutura de decisão
let a = 10
let b = 10

if(a==b){
    console.log(`Entrou na estrutura`)

}
//if aninhado 
if(a<b){
    if(b>a){
        //diferente
        if(a!=b){
            console.log(`Entrou na estrtura`)
        }
    }
}

//Utilizando o else para responder a parte false
if (a>b){
    console.log(`A é maior que B`)
}
else{
    console.log(`A não é maior que B`)
}
//Exemplo 1
let wellcome
let horario = 35
if(horario<12){
    wellcome = "Bomdia"
    console.log(wellcome)
} 
else if (horario<18){
    wellcome = "Boa tarde"
    console.log(wellcome)
}
else if  (horario<24) {
    wellcome = "Boa noite"
    console.log(wellcome)
}
else {
    console.log ("Este horário não é válido")
}
//Exemplo 2
horario = 2 
    console.log (`Digite: \n1-Bom dia \n2-Boa tarde \n3=Boa noite`)
    if(horario == 1){
        wellcome = "Bomdia"
        console.log(wellcome)
    } 
    else if (horario == 2){
        wellcome = "Boa tarde"
        console.log(wellcome)
    }
    else if  (horario == 3) {
        wellcome = "Boa noite"
        console.log(wellcome)
    }
    else {
        console.log(`Período inválido`)
    }
