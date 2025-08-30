document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const closeBtn = document.getElementById("closeLightbox");
  const prevBtn = document.getElementById("prevProject");
  const nextBtn = document.getElementById("nextProject");

  let currentIndex = -1;

  function openLightbox(i) {
    currentIndex = i;
    lightboxImg.src = items[i].src;
    lightbox.classList.add("show");   // instead of display = flex
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("show"); // instead of display = none
    document.body.style.overflow = "";
    currentIndex = -1;
  }

  function next() {
    openLightbox((currentIndex + 1) % items.length);
  }

  function prev() {
    openLightbox((currentIndex - 1 + items.length) % items.length);
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => openLightbox(i));
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Close on background click
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    if (currentIndex === -1) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
});
