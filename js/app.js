let nasc = prompt('Digite seu ano de nascimento: ');
nasc = parseInt(nasc);

let viva = confirm('Se você estiver viva, clique ok.');

if (viva){
    alert(`Você tem ${2026-nasc}`);

}else{
    alert("Você morreu.");
}
