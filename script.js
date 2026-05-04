const imagens = document.querySelectorAll(".foto-pizza img");

const modal = document.getElementById("modalImagem");
const imagemGrande = document.getElementById("imagemGrande");
const fecharModal = document.getElementById("fecharModal");

imagens.forEach((img) => {
  img.addEventListener("load", () => {
    img.parentElement.classList.add("tem-foto");
  });

  img.addEventListener("error", () => {
    img.parentElement.classList.remove("tem-foto");
  });

  img.addEventListener("click", () => {
    imagemGrande.src = img.src;
    modal.style.display = "flex";
  });
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});