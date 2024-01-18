alert('Boas Vindas ao site de compra de pacotes de viagens');
//let numeroScreto = 29;
let porcentagemDesconto = 0;
console.log(porcentagemDesconto);
let quantidadeMilhas = prompt('Informe a quantidade de Milhas');
//let chute = prompt(' Escolha um Numero entre 1 e 30');
//
//if (numeroScreto == chute) {
//  alert(`O Número secreto é: ${numeroScreto}`);
//} else {
//alert('Vc errou :( tente novamete');
//alert('O numero secreto era ' + numeroScreto + ', mas Vc escolheu ' + chute);
//}
/*
if (quantidadeMilhas > 5000) {
  porcentagemDesconto = porcentagemDesconto + 10;
  alert('o percentual de desconto e: ' + porcentagemDesconto);
} else if (quantidadeMilhas > 30000) {
  porcentagemDesconto = porcentagemDesconto + 20;
  alert('o percentual de desconto e: ' + porcentagemDesconto);
} else {
  porcentagemDesconto = 0;
  alert('o percentual de desconto e: ' + porcentagemDesconto);
}
*/
if (quantidadeMilhas > 30000) {
  porcentagemDesconto = porcentagemDesconto + 20;
  console.log(porcentagemDesconto);
  alert('o percentual de desconto e: ' + porcentagemDesconto + '%');
} else if (quantidadeMilhas > 5000) {
  porcentagemDesconto = porcentagemDesconto + 10;
  console.log(porcentagemDesconto);
  alert('o percentual de desconto e: ' + porcentagemDesconto + '%');
} else {
  porcentagemDesconto = 0;
  console.log(porcentagemDesconto);
  alert('o percentual de desconto e: ' + porcentagemDesconto + '%');
}
