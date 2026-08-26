var nasc = 2009;
let nome = "duda";
const viva = true;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    let menor;

    if (idade < 18){
       menor = true;
    }else{
       menor = false;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}`)
    return idade;
}

calcIdade();
/*
alert(`Fora da função : idade ${idade}`);
erro pois a variavellet não existe fora do escopo dela
*/
alert(`Fora da função : chamado calcidade ${calcIdade(2027)}`);
