const galleryItem = document.querySelectorAll('.gallery__item')
const lightbox = document.querySelector('.lightbox')
const buttonClose = document.querySelector('.lightbox__button')
const lightboxImage = document.querySelector('.lightbox__image')
const overlay = document.querySelector('.lightbox__overlay')
const galleryContainer = document.querySelector('.js-gallery');
const closeModalButton = document.querySelector(".lightbox__button");

function openLightbox(event) {
    event.preventDefault();
    const link = event.currentTarget.querySelector('.gallery__link');
    const imageSrc = link.getAttribute('href');
    const imageAlt = link.querySelector('.gallery__image').getAttribute('alt');
  
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightbox.classList.add('is-open');
  }
  galleryItem.forEach(item => {
    item.addEventListener('click', openLightbox);
  });
  
  buttonClose.addEventListener('click', buttonClose);
  overlay.addEventListener('click', buttonClose);

  const galleryMarkup = createGalleryMarkup(galleryItem);
  
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  
  function createGalleryMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>
        `;
      })
      .join('');
  }
  function closeModal() {
    backdrop.classList.add('is-hidden');
  }
  
  closeModalButton.addEventListener("click", closeModal);