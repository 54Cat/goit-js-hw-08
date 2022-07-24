// Задание 1 - библиотека SimpleLightbox
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// 1. Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2. Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).

// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.



import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const listGallery = document.querySelector(".gallery");

const createList = (galleryItems) => 
    galleryItems.reduce((acc, image) => acc +
        `<a class="gallery__link" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>`, ""); 

listGallery.insertAdjacentHTML("beforeend" , createList(galleryItems));

new SimpleLightbox('.gallery__link', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

// console.log(galleryItems);