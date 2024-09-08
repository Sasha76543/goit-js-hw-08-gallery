const galleryItem = document.querySelectorAll(".gallery__item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const galleryContainer = document.querySelector(".js-gallery");
const closeModalButton = document.querySelector(".modal__close");

function closeModal() {
  backdrop.classList.add('is-hidden');
}

closeModalButton.addEventListener("click", closeModal);

function openLightbox(event) {
  event.preventDefault();
  const link = event.currentTarget.querySelector(".gallery__link");
  const imageSrc = link.getAttribute("href");
  const imageAlt = link.querySelector(".gallery__image").getAttribute("alt");

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightbox.classList.add("is-open");
}
galleryItem.forEach((item) => {
  item.addEventListener("click", openLightbox);
});

