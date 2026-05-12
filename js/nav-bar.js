// Seleciona o elemento com a classe "hamburger" e o elemento com a classe "nav"
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// Adiciona um event listener para o clique no elemento "hamburger"
hamburger.addEventListener("click", () => {
  // Adiciona ou remove a classe "active" do elemento "nav" quando o "hamburger" é clicado
  nav.classList.toggle("active");
});

// Seleciona todos os links dentro da lista com a classe "nav-list"
const navLinks = document.querySelectorAll(".nav-list a");

// Para cada link, adiciona um event listener para o clique
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Remove a classe "active" do elemento "nav" quando um link é clicado
    nav.classList.remove("active");
  });
});

// Garantir que ao clicar no link vá parar antes do conteudo, dessa forma a nav não vai tampar 
document.addEventListener('DOMContentLoaded', function() {
  // Defina o offset desejado em pixels
  var offset = 120; // ajuste este valor conforme necessário

  // Capture todos os links da navbar
  var navbarLinks = document.querySelectorAll('nav a[href^="#"]');

  // Adicione um evento de clique a cada link
  navbarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Previna o comportamento padrão de ancoragem

      // Obtenha o ID da seção alvo
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      // Calcule a posição de destino com o offset
      var targetPosition = targetElement.offsetTop - offset;

      // Role suavemente até a posição de destino ajustada
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});