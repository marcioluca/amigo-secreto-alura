//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// lista amigos
let amigos = [];

// função para adicionar amigos.
function adicionarAmigo(){
 let nome = document.getElementById("amigo").value;
 if(nome === ""){
    alert("Por favor, insira um nome.")
    return;
 };
 amigos.push(nome); 
 
 //Limpar campo
 document.getElementById("amigo").value = "";
};
adicionarAmigo();
console.log(amigos)
