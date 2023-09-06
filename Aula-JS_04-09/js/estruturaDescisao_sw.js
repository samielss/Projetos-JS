console.log(`Escolha uma fruta;`)
console.log("\n1-Banana\n2-Morango\n3-Tomate\n4-Sair")

let opcao, fruta;

opcao = 4;

switch (opcao){
    case 1: fruta = "Banana"
    break
    case 2: fruta = "Morango"
    break
    case 3: fruta = "Tomate"
    break
    default: fruta = "Sair"
    break
}
console.log(`Você escolheu ${fruta}`)