let slideIndex = 1;
mostrarSlide(slideIndex);

// Função para avançar ou voltar os slides (chamada pelos botões)
function mudarSlide(n) {
  mostrarSlide(slideIndex += n);
}

// Função para mostrar um slide específico (chamada pelos pontos)
function mostrarSlideAtual(n) {
  mostrarSlide(slideIndex = n);
}

// Função principal que controla a exibição dos slides
function mostrarSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Lógica para voltar ao primeiro slide ou ir para o último
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove a classe "active" de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra o slide correto e marca o ponto correspondente como ativo
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const slideshowContainer = document.querySelector('.slideshow-container');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// 2. Adiciona um "ouvinte de evento" ao botão. A função toggleFullScreen será chamada sempre que o botão for clicado.
fullscreenBtn.addEventListener('click', toggleFullScreen);

// 3. Cria a função que alterna entre o modo normal e a tela cheia
function toggleFullScreen() {
  // Verifica se o navegador NÃO está em modo de tela cheia
  if (!document.fullscreenElement) {
    // Se não estiver, pede para entrar em tela cheia no elemento do slideshow
    slideshowContainer.requestFullscreen().catch(err => {
      // Exibe um alerta caso o navegador não permita (ex: em iframes)
      alert(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`);
    });
  } else {
    // Se JÁ ESTIVER em tela cheia, pede para sair
    document.exitFullscreen();
  }
}

// 4. (Opcional, mas recomendado) Atualiza o ícone do botão quando o estado da tela cheia muda (ex: se o usuário apertar ESC)
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        fullscreenBtn.innerHTML = '&#x26F6;'; // Altera o ícone para "sair"
        fullscreenBtn.title = 'Sair da tela cheia';
    } else {
        fullscreenBtn.innerHTML = '&#x26F6;'; // Altera o ícone para "entrar"
        fullscreenBtn.title = 'Ver em tela cheia';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    const slideshow = document.querySelector('.slideshow-container');

    lightGallery(slideshow, {
        plugins: [lgZoom],
        selector: '.link-imagem',
        speed: 500,
        download: false,
        getCaptionFromTitle: true,

        // A CORREÇÃO MÁGICA ESTÁ AQUI:
        // Diz à galeria para criar o pop-up dentro do contêiner do slideshow.
        container: slideshow,
    });
});