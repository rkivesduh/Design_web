var nasc = 2009;
let nome = "duda";
const viva = true;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    alert (`Dentro de função - idade ${idade}`);
    return idade;
}

calcIdade();
/*
alert(`Fora da função : idade ${idade}`);
erro pois a variavellet não existe fora do escopo dela
*/
alert(`Fora da função : chamado calcidade ${calcIdade(2027)}`);
