// Cria o botão de inserir
const button = document.createElement("button");
button.textContent = "Inserir";
document.body.appendChild(button); // Adiciona o botão ao body

// Função para adicionar um novo item à lista
button.addEventListener("click", function () {
  const lista = document.getElementById("lista"); // Seleciona a <ul> com id "lista"
  const novoItem = document.createElement("li"); // Cria um novo <li>
  novoItem.textContent = "Nova entrada"; // Define o texto do novo item
  lista.appendChild(novoItem); // Adiciona o <li> criado à lista <ul>
});
