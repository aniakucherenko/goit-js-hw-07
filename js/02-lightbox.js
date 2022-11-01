import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkUp = createGalleryItemsMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkUp);

function createGalleryItemsMarkUp(items) {
    const markUp = items.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    });
   
    return markUp.join('');
   }




console.log(galleryItems);
