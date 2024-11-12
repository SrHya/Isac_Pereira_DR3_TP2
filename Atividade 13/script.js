// script.js
document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close");

  // Função para mostrar o modal
  openModalButton.addEventListener("click", () => {
    modal.classList.remove("hide");
  });

  // Função para esconder o modal
  closeButton.addEventListener("click", () => {
    modal.classList.add("hide");
  });

  // Fechar o modal quando clicar fora da área de conteúdo
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hide");
    }
  });
});
