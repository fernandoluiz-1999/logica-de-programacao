// - Entrada de dados

//1 - peso
//2 - altura      prompt -> obter valores
//3 - nome        alert -> exbir resultado

// - Processamento de dados

// Peso/altura**2
//variavel para retorno

//- Saída de dados

const nomePessoa = prompt("Informe seu nome: ");

const pesoPessoa = prompt("Qual é seu peso? ");

const alturaPessoa = prompt("Qual é sua altura? ");

const calcIMC = (pesoPessoa / alturaPessoa**2).toFixed(1);

if (calcIMC < 18.5) {
    alert(`${nomePessoa} tem IMC = ${calcIMC} e está abaixo do peso`)
} else if (calcIMC >= 18.5 && calcIMC <= 24.9) {
    alert(`${nomePessoa} tem IMC = ${calcIMC} e está normal`)
} else if (calcIMC >= 25 && calcIMC <= 29.9) {
    alert(`${nomePessoa} tem IMC = ${calcIMC} e está sobrepeso`)
} else if (calcIMC >= 30 && calcIMC <= 34.4) {
    alert(`${nomePessoa} tem IMC = ${calcIMC} e está com obesidade grau I`)
} else if (calcIMC >= 35 && calcIMC <= 39.9) {
    alert(`${nomePessoa} tem IMC = ${calcIMC} e está com obesidade grau II`)
} else {
    alert(`${nomePessoa} tem IMC = ${calcIMC} e está com obesidade grau III`)
}