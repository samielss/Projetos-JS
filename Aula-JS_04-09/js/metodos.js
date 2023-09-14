//Calculadora
//Variáveis
let esc, op, result, num1, num2
console.log(`Escolha uma operação;`)
console.log("\n1-Soma\n2-Subtração\n3-Multiplicação\n4-Divisão\n5-Sair")
esc = 2
console.log(`Digite o primeiro número`)
console.log(`Digite o segundo número`)
const calc = {
    n1 : 10,
    n2 : 20.50,
    soma: (num1,num2) => {
        this.n1 = num1  
        this.n2 = num2
        return (this.n1 + this.n2)
},
    sub: (num1,num2) => {
        this.n1 = num1  
        this.n2 = num2
        return (this.n1 - this.n2)
},
    mult: (num1,num2) => {
        this.n1 = num1  
        this.n2 = num2
        return (this.n1 * this.n2)
},
    div: (num1,num2) => {
        this.n1 = num1  
        this.n2 = num2
        return (this.n1 / this.n2)
},
} 
num1 = 10
num2 = 20
switch (esc) {
    case 1: op = "Soma", result = calc.soma(num1,num2) 
    break
    case 2: op = "Subtração", result = calc.sub(num1,num2) 
    break
    case 3: op = "Multiplicação", result = calc.mult(num1,num2) 
    break
    case 4: op = "Divisão", result = calc.div(num1,num2) 
    break
}
console.log(`Você escolheu os seguintes números \n${num1} \n${num2} \nA operação selecionada foi:${op} \nO resultado da sua operação foi ${result}`)    
//Usuárioo
const getdecision = () => {
    reutrn 
} 