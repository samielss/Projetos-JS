//Criando um objeto
const car ={
    randan: 20,
    marca:"Fiat",
    cor: "Amarelo",
    ano: 2000,
    modelo: "Toro",
    km: 1500,
    combustivel: "Gasolina",
    escolhaCor: function (cor) {
        return cor
    },
    fazerRandan: function (randan){
        return randan++;
    }
};
//Acessando os atributos do objeto
car.marca = "Fiat"
car.cor = "Azul"
car.ano = "2000"
car.modelo = "Uno"
car.km = "0"
car.combustivel = "Diesel"
console.log(`O carro ${car.marca} ${car.modelo}, do ano ${car.ano}, tem a pintura ${car.cor} com ${car.km} quilômetros rodados aceita combustivel do tipo ${car.combustivel}.`)

let mostraCor = car.escolhaCor("Vermelho")

console.log(`A cor escolhida ${mostraCor}`)

//Aceleraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
let randandandan = car.fazerRandan(200)

console.log(`Acelerando ${randandandan}0`)