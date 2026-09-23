const amigos = []
const cadastro = document.getElementById ("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista =  document.getElementById("lista");
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value];
    amigos.unshift(item);
    //limpa o formulario
    cadastro.reset();
    //atualiza lista
    exibirlista();
})

function exibirlista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //item = 
        let remover = `<buttom onclick= "remover(${i})">Remover</buttom>`
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]}`;
        itens = itens + li;
    }
    lista.innerHTML = itens;

}

function remover(i){
    let item = amigos[i];
    let check = confirm(`Deseja realmente excluir ${item[0]}?`);
    if (check == true){
        amigos.splice(i,1);
    }
}
