import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
const listContent = generateGalleryList(galleryItems);

function generateGalleryList(galleryItems) {
    return galleryItems.flatMap((image) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src=${image.preview}
      alt="${image.description}"
    />
  </a>
</li>`)
  .join("");
}
list.insertAdjacentHTML("beforeend", listContent);

const gallery = new SimpleLightbox('.gallery a', { 
    overlay: true,
    overlayOpacity: 0.8,
    captionsData: `alt`,
    captionDelay: 250,
});;
