document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Esconde o formulário
    document.getElementById("formulario").style.display = "none";
  
    // Mostra o vídeo
    const videoContainer = document.getElementById("video");
    videoContainer.classList.remove("hidden");
  
    // Começa o vídeo automaticamente
    const video = document.getElementById("meu-video");
    video.play();
  });
  