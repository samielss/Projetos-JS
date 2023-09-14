//Criando arrays
const carros = ["Fusca", "Ferrai", "Audi", "Brasilia"]

const valores = [0 , true, "Senac", 4.50]

console.log(valores[2])
console.log(`Seu carro é ${carros[3]}`)

//Criar o array e inserir os elementos 
const car = []
car [0] = "Maverick"
car [1] = "BMW"
car [2] = "Volvo"
car [3] = "Audi"
car [4] = "Ferrrari"
car [5] = "Toro"
car [6] = "HR-V"
//Percorrendo arrays com estrutura de reptição
let i

for(i=0; i<car.length; i++){
console.log(car[i])
}

const numeros = [50, 49]
    for(let indice=0; indice<numeros.length; indice++){
        if (numeros[indice]<numeros[indice++]) {
            numeros[indice++]=numeros[indice]
        }
        console.log(numeros[indice])
    }

