let n1 = Number(prompt("digite um numero:"));
let n2 = Number(prompt("digite outro numero:"))
let op;

do{
    let msg = "escolha uma opção :\n";
    msg = msg + "1: Somar\n";
    msg = msg + "2: Subtrair\n";
    msg = msg + "3: Multiplicar\n";
    msg = msg + "4: Dividir\n";
    msg = msg + "5: Sair";
    op = prompt(msg);
    switch(op){
        case "1" : alert(`${n1} + ${s2} = ${n1 + n2}`); break;
        case "2" : alert(`${n1} - ${s2} = ${n1 - n2}`); break;
        case "3" : alert(`${n1} * ${s2} = ${n1 * n2}`); break;
        case "4" : alert(`${n1} / ${s2} = ${n1 / n2}`); break;
        case "5" : alert("Ate logo!"); break;
        default:alert("Opção invalida!"); break;
    }
}while(op !="5");