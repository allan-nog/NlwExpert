const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
    respostas: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()"
    ],
    correta: 2
  },
  {
    pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
      "append()",
      "push()",
      "addToEnd()"
    ],
    correta: 1
  },
  {
    pergunta: "Como você declara uma variável em JavaScript?",
    respostas: [
      "v myVar",
      "var myVar",
      "variable myVar"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Atribuição",
      "Comparação estrita",
      "Concatenação"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "<!-- Este é um comentário -->"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
    respostas: [
      "Converter uma string em um número inteiro",
      "Converter um número em uma string",
      "Converter uma string em um número decimal"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de acessar o elemento 'myElement' pelo ID em JavaScript?",
    respostas: [
      "document.getElementByName('myElement')",
      "document.getElementById('myElement')",
      "document.getElement('myElement')"
    ],
    correta: 1
  },
  {
    pergunta: "Como você chama uma função chamada 'myFunction'?",
    respostas: [
      "myFunction()",
      "call myFunction()",
      "invoke myFunction()"
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'forEach()' faz em JavaScript?",
    respostas: [
      "Itera sobre os elementos de um array",
      "Remove um elemento de um array",
      "Adiciona um elemento ao final de um array"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a palavra-chave usada para declarar uma variável constante em JavaScript?",
    respostas: [
      "const",
      "let",
      "var"
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta- ' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if (estaCorreta){
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  //Coloca a pergunta na tela
  quiz.appendChild(quizItem)
}