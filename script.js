document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImage");
  const title = document.getElementById("lightboxTitle");
  const desc = document.getElementById("lightboxDescription");
  const closeBtn = document.getElementById("closeLightbox");
  const prevBtn = document.getElementById("prevProject");
  const nextBtn = document.getElementById("nextProject");

  // Create Visit Project button dynamically
  let visitBtn = document.createElement("a");
  visitBtn.id = "lightboxVisit";
  visitBtn.target = "_blank";
  visitBtn.className = "inline-block mt-4 px-4 py-2 bg-[#fa8072] text-white rounded hover:bg-[#ff9889] transition-colors";
  visitBtn.textContent = "Visit Project";
  document.getElementById("lightboxCaption").appendChild(visitBtn);

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
    document.body.style.overflow = "hidden";
    currentIndex = i;
  }

  function closeLightboxFunc() {
    lightbox.classList.add("hidden");
    document.body.style.overflow = "";
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
