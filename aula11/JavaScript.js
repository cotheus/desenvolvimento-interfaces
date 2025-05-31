/* // Aqui estamos solicitando para que o usuário digite o nome dele e armazenamos na varável nome
const nome = prompt("Digite seu nome:");

// Aqui apresentamos a mensagem concatenada com a variável
console.log("O nome digitado foi:", nome)

// Aqui estamos solicitando para que o usuário digite a idade dele e armazenamos na varável nome
const idade = parseInt(prompt("Digite sua idade:"));

// Aqui estamos apresentando a idade digitada mais 10 anos
console.log("idade + 10:", idade + 10);  // Adiciona 10 para mostrar que é um número



// Pede o nome e as 4 notas de um aluno
const nome = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a nota do 1° bimestre:"));
const nota2 = parseFloat(prompt("Digite a nota do 2° bimestre:"));
const nota3 = parseFloat(prompt("Digite a nota do 3° bimestre:"));
const nota4 = parseFloat(prompt("Digite a nota do 4° bimestre:"));

// Calcula a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibe resultado
console.log(`Aluno: ${nome}`); // use a crase para `aqui o texto e variável` para concatenar variáveis e texto
console.log(`Média final: ${media.toFixed(1)}`);

if (media >= 6) {
    console.log("Situação: Aprovado");
} else {
    console.log("Situação: Reprovado");
}

// Aqui estamos criando o array
const frutas = ["maçã", "banana", "laranja"];

// Aqui estamos apresentando a tel
console.log(frutas);

// Aqui estamos usandos um construtor chamado "new Array()"
const numeros = new Array(1, 2, 3, 4, 5);

// Aqui estamos apresentando os dados
console.log(numeros);
*/