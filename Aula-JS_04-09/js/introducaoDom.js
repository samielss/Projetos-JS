//Trabalhando com o DOM

document.getElementById("exemplo").innerHTML = "Senac Largo Treze"

function getcube(){
    const number = document.getElementById("number").value;
    alert(number*number*number)
}

function getnumber(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    alert(num1+num2)
}