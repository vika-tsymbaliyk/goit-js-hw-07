import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
const listContent = generateGalleryList(galleryItems);

list.insertAdjacentHTML("beforeend", listContent);

function generateGalleryList(galleryItems) {
    return galleryItems.flatMap((image) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${image.preview}
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`)
  .join("");
}

function imageGetUrl(event) {
    event.preventDefault();
   
    if (!event.target.classList.contains('gallery__image')) {
        return
    };
    const largeImageUrl = event.target.dataset.source;
 }
list.addEventListener("click", imageGetUrl)
