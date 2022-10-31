import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkUp = createGalleryItemsMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkUp);

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

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1200" height=auto/>
`)
instance.show()
// {
//     onShow: (instance) => {},  
//     onClose: (instance) => {}
// }
}





// console.log(galleryItems);
