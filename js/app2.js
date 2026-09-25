const amigos = []
const cadastro = document.getElementById ("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;
const lista =  document.getElementById("lista");
let editando = null;
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
let item = [nome.value, nasc.value, whatsapp.value];
if (editando == null){
    let check = amigos.find(item => item[0] == mome.value);
    if (check == undefined){
        amigos.unshift(item);
        cadastro.requestFullscreen();
    }else{
        alert(`${nome.value} ja cadastrado`);
    }
}else{
    let amigo = amigos [editando]
    amigo[0] = nome.value;
    amigo[0] = nasc.value;
    amigo[0] = whatsapp.value;
}
    //atualiza lista
    exibirlista();
})

function exibirlista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //item = 
        let atualizar = `<buttom onclick= "remover(${i})">Remover</buttom>`
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]} ${atualizar} </li>`;
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
    exibirlista();
}

function atualizar(i){
    editando =i
    let item = amigos[editando];
    nome.value = item[0];
    nasc.value = item[1];
    whatsapp.value = item[2]; 
}
