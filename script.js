document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDescription = document.getElementById("lightboxDescription");
  const closeLightbox = document.getElementById("closeLightbox");
  const prevButton = document.getElementById("prevProject");
  const nextButton = document.getElementById("nextProject");

  let currentIndex = -1;

  function openLightbox(index) {
    const item = portfolioItems[index];
    const image = item.getAttribute("data-image");
    const title = item.getAttribute("data-title");
    const description = item.getAttribute("data-description");

    lightboxImage.src = image;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;

    lightbox.classList.remove("hidden");
    currentIndex = index;
  }

  function close() {
    lightbox.classList.add("hidden");
    currentIndex = -1;
  }

  function showNext() {
    if (currentIndex < portfolioItems.length - 1) {
      openLightbox(currentIndex + 1);
    } else {
      openLightbox(0);
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      openLightbox(currentIndex - 1);
    } else {
      openLightbox(portfolioItems.length - 1);
    }
  }

  // Portfolio item clicks
  portfolioItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  // Button clicks
  closeLightbox.addEve
