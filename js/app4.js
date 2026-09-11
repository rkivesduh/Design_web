let vezes = Number (prompt("Digite o numero de vezes:"));
for (let i =1; i<vezes; i++){
    if (vezes > 100){
        alert("valor invalido, recarregue a pagina e digite um valor de 0 a 100");
        break
    }

  alert ('Contei ${i} vez');
  if (i%2!=0){ //é par
    continue; //se par, continua = voltar
  }
    alert ('${i} é par');
}