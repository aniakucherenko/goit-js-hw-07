import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkUp = createGalleryItemsMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkUp);

galleryContainer.addEventListener('click', onContainerClick);

function createGalleryItemsMarkUp(galleryItems) {
 const markUp = galleryItems.map(({preview, original, description}) => {
 return `
 <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </div>
 `;

 });
 return markUp.join('');
}

function onImageClick(event) {

console.log(event.target);
}

const OriginalImageUrl = event.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${OriginalImageUrl}" />
`)

instance.show()



console.log(galleryItems);
