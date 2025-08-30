document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDescription");
  const visitBtn = document.getElementById("lightboxVisit");
  const closeBtn = document.getElementById("closeLightbox");
  const prevBtn = document.getElementById("prevProject");
  const nextBtn = document.getElementById("nextProject");

  let currentIndex = -1;

  function openLightbox(i) {
    const item = items[i];
    img.src = item.dataset.image;
    title.textContent = item.dataset.title;
    desc.textContent = item.dataset.description;

    if (item.dataset.link) {
      visitBtn.href = item.dataset.link;
      visitBtn.style.display = "inline-block";
    } else {
      visitBtn.style.display = "none";
    }

    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // disable scroll
    currentIndex = i;
  }

  function closeLightboxFunc() {
    lightbox.classList.add("hidden");
    document.body.style.overflow = ""; // restore scroll
    img.src = ""; // clear image to prevent “expanded” look on load
    currentIndex = -1;
  }

  function next() {
    openLightbox((currentIndex + 1) % items.length);
  }

  function prev() {
    openLightbox((currentIndex - 1 + items.length) % items.length);
  }

  // Open on click
  items.forEach((item, i) => item.addEventListener("click", () => openLightbox(i)));

  // Buttons
  closeBtn.addEventListener("click", closeLightboxFunc);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Close when clicking background
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightboxFunc();
  });

  // Keyboard support
  document.addEventListener("keydown", e => {
    if (currentIndex === -1) return;
    if (e.key === "Escape") closeLightboxFunc();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
});
