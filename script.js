document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDescription");
  const closeBtn = document.getElementById("closeLightbox");
  const prevBtn = document.getElementById("prevProject");
  const nextBtn = document.getElementById("nextProject");

  let currentIndex = -1;

  function openLightbox(i) {
    const item = items[i];
    img.src = item.dataset.image;
    title.textContent = item.dataset.title;
    desc.textContent = item.dataset.description;
    lightbox.classList.remove("hidden");
    currentIndex = i;
  }

  function closeLightboxFunc() {
    lightbox.classList.add("hidden");
    currentIndex = -1;
  }

  function next() {
    openLightbox((currentIndex + 1) % items.length);
  }

  function prev() {
    openLightbox((currentIndex - 1 + items.length) % items.length);
  }

  items.forEach((item, i) => item.addEventListener("click", () => openLightbox(i)));
  closeBtn.addEventListener("click", closeLightboxFunc);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  lightbox.addEventListener("click", e => { if(e.target===lightbox) closeLightboxFunc(); });
  document.addEventListener("keydown", e => {
    if(currentIndex === -1) return;
    if(e.key === "Escape") closeLightboxFunc();
    if(e.key === "ArrowRight") next();
    if(e.key === "ArrowLeft") prev();
  });
});
