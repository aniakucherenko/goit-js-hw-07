import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkUp = createGalleryItemsMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkUp);

function createGalleryItemsMarkUp(items) {
 const markUp = items.map(({preview, original, description}) => {
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
    `,
    {
    onShow: (instance) => {
        window.addEventListener('keydown', onEscPress);
    },  
    onClose: (instance) => {
        window.removeEventListener('keydown', onEscPress);
    },
  }
 );
 instance.show()

 function onEscPress (event) {
 if (event.code === 'Escape'){
    instance.close();
  }
 }
}


