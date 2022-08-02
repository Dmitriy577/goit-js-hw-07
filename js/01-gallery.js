import { galleryItems } from "./gallery-items.js";
const divGallery = document.querySelector(".gallery");
const renderImg = galereaImag(galleryItems);
divGallery.insertAdjacentHTML("afterbegin", renderImg)
divGallery.addEventListener("click", selectImg);
console.log(divGallery)

function galereaImag(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join("");
}

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
  return;
  }
  const images = event.target.dataset.source;
  const imagesAlt = event.target.src;
    const instance = basicLightbox.create(
      `<img src="${images}" alt="${imagesAlt}" width="800" height="600">`,
      {
        onShow: () => {
          document.addEventListener("keydown", escape);
        },
        onClose: () => {
          document.removeEventListener("keydown", escape);
        },
      });
    instance.show();
}
function escape(event) {
  if (event.code !== "Escape") {
    return;
}
    
const modal = document.querySelector(".basicLightbox");
  if (modal) {
    modal.classList.remove("basicLightbox--visible");
    setTimeout(() => {
    modal.remove();
    }, 250);
    document.removeEventListener("keydown", escape);
    }
  }