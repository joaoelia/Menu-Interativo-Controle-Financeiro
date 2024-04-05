// Menu Interativo
/*
let opcao = ""

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
} while (opcao !== "5"); 
*/

// Controle Financerio 

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");
