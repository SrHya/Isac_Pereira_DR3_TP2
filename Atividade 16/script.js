// script.js
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    // Adiciona evento de clique a cada item do acordeão
    item.addEventListener("click", () => {
      const content = item.querySelector("p");

      // Esconder conteúdo de todos os itens, exceto o clicado
      accordionItems.forEach((i) => {
        const otherContent = i.querySelector("p");
        if (otherContent !== content) {
          otherContent.classList.add("hidden");
        }
      });

      // Alterna a visibilidade do conteúdo do item clicado
      content.classList.toggle("hidden");
    });
  });
});
