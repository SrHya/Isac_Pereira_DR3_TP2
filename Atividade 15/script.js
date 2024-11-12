// script.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("table button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr"); // Seleciona a linha da tabela
      const notaCell = row.querySelector(".nota"); // Seleciona a célula com a classe 'nota'
      const nota = parseFloat(notaCell.textContent); // Obtém e converte a nota para número

      // Verifica a nota e aplica a classe de estilo correspondente
      if (nota >= 5) {
        row.classList.add("green-bg");
        row.classList.remove("red-bg");
      } else {
        row.classList.add("red-bg");
        row.classList.remove("green-bg");
      }
    });
  });
});
