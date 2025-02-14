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
   listaAmigos();
   
   //Limpar campo
   document.getElementById("amigo").value = "";
};

// funcao para percorrer a lista de amigos e exibir na tela 
function listaAmigos() {
   let exibirAmigos = document.getElementById("listaAmigos");
   exibirAmigos.innerHTML = "";
   amigos.forEach(function (amigo) {
      let li = document.createElement("li");
      li.textContent = amigo;
      exibirAmigos.appendChild(li);
   });
};

// funcao para sortear lista de amigos
function sortearAmigo() {
   if (amigos.length === 0) {
      document.getElementById("resultado").innerHTML = "Não há amigos para sortear."
      return;
   };
   let nomeSorteado = Math.floor(Math.random() * amigos.length);
   let amigoSorteado = amigos[nomeSorteado];
   document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
   
   // ocultar lista após sorteio
   document.getElementById("listaAmigos").style.display = "none";
};