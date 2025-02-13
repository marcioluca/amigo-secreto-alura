//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// lista amigos
let amigos = [];

// função para adicionar amigos.
function adicionarAmigo() {
   let input = document.getElementById("amigo");
   let nome = input.value.trim();
   if (nome === "") {
      alert("Por favor, insira um nome.");
      return;
   };
   amigos.push(nome);
   listaAmigos()

   //Limpar campo
   document.getElementById("amigo").value = "";
};
 console.log(amigos);

// funcao para percorrer a lista de amigos e exibir
function listaAmigos() {
   let exibirAmigos = document.getElementById("listaAmigos");
   exibirAmigos.innerHTML = "";
   amigos.forEach(function (amigo) {
      let li = document.createElement("li");
      li.textContent = amigo;
      exibirAmigos.appendChild(li);
   });
};