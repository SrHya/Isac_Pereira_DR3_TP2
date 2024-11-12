// script.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("trocarClasses");

  button.addEventListener("click", () => {
    // Seleciona todos os elementos <td> dentro da tabela
    const cells = document.querySelectorAll("table td");

    cells.forEach((cell) => {
      // Alterna as classes entre azul e vermelho
      if (cell.classList.contains("azul")) {
        cell.classList.remove("azul");
        cell.classList.add("vermelho");
      } else if (cell.classList.contains("vermelho")) {
        cell.classList.remove("vermelho");
        cell.classList.add("azul");
      }
    });
  });
});
