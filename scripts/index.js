const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('darkmode');
  const githubimg = document.querySelectorAll("img.githubimg");
  const wppimg = document.querySelectorAll("img.wppimg");
  const linkedinimg = document.querySelectorAll("img.linkedinimg");
  const instagramimg = document.querySelectorAll("img.instagramimg");
  const profile = document.querySelectorAll("img.weslley");

  const novoCaminhoProfDark = "./assets/profileDark.jpg";
  const novoCaminhoProfLight = "./assets/profileWhite.jpg";
  
  const novoCaminhoDark = "./assets/github-mark-white.svg";
  const novoCaminhoLight = "./assets/github-mark.svg";
  
  const novoCaminhoWppLight = "./assets/whatsapp.svg";
  const novoCaminhoWppDark = "./assets/whatsapp-light.svg";
  
  const novoCaminhoLinkedinLight = "./assets/linkedin.svg";
  const novoCaminhoLinkedinDark = "./assets/linkedin-light.svg";
  
  const novoCaminhoInstagramLight = "./assets/instagram.svg";
  const novoCaminhoInstagramDark = "./assets/instagram-light.svg";
  
  githubimg.forEach(function(imagem) {
    if (html.classList.contains('darkmode')) {
      imagem.src = novoCaminhoDark;
    } else {
      imagem.src = novoCaminhoLight;
    }
  });

  profile.forEach(function(imagem) {
    if (html.classList.contains('darkmode')) {
      imagem.src = novoCaminhoProfDark;
    } else {
      imagem.src = novoCaminhoProfLight;
    }
  });
  
  wppimg.forEach(function(imagem) {
    if (html.classList.contains('darkmode')) {
      imagem.src = novoCaminhoWppDark;
    } else {
      imagem.src = novoCaminhoWppLight;
    }
  });
  
  linkedinimg.forEach(function(imagem) {
    if (html.classList.contains('darkmode')) {
      imagem.src = novoCaminhoLinkedinDark;
    } else {
      imagem.src = novoCaminhoLinkedinLight;
    }
  });
  
  instagramimg.forEach(function(imagem) {
    if (html.classList.contains('darkmode')) {
      imagem.src = novoCaminhoInstagramDark;
    } else {
      imagem.src = novoCaminhoInstagramLight;
    }
  });
}
