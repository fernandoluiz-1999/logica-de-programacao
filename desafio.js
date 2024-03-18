// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação 1, p. , em que temos que obter as 3 notas de um aluno, calcular a média (7) e exibir se o aluno foi aprovado, reprovado (<= 4) ou se ficou para exame (<=5, <= 6). Não é necessário ler as notas, você pode defini-las com variáveis.

//Você precisará utilizar uma estrutura de decisão composta, como a seguir:
//if (condicao1) {
  // código da condição 1
//} else if (condicao2) {
  // código da condição 2
//} else {
  // código se nenhuma das condições for verdadeira
//}

//declaração - identificador - tipo (valor)

//entrada de dados
let nota1 = 7;

let nota2 = 6;

let nota3 = 3;

const nomeAluno = "Fernando"

const calcMedia = (nota1 + nota2 + nota3) / 3;

if (calcMedia >= 7) {
    //saída de dados
    console.log(`O aluno ${nomeAluno} foi aprovado com média final de: ${calcMedia.toFixed(0)}`);
// Se a média não é maior ou igual a 7, então obrigatoriamente será menor que sete, não sendo preciso testar esta condição.Isso elimina a necessidade de utilizarmos operadores lógicos em condicionais simples.
} else if (calcMedia <= 4) {
    //saída de dados
    console.log(`O aluno ${nomeAluno} foi reprovado com média final de: ${calcMedia.toFixed(0)}`);
} else {
    //saída de dados
    console.log(`O aluno ${nomeAluno} está de recuperação(exame) com média final de: ${calcMedia.toFixed(0)}`);
}