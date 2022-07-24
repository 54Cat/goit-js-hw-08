// Задание 3 - форма обратной связи
// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>
// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// 4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.



const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

const feedbackForm = {};

updateOutput();
form.addEventListener("input", throttle(saveMessage, 500));
form.addEventListener("submit", sendMessege);

function saveMessage(evt) {
    evt.preventDefault();

    feedbackForm.email = email.value;
    feedbackForm.message = message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackForm));
updateOutput();

}

function sendMessege(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function updateOutput() {
    const sevedDataMes = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (sevedDataMes) {
        email.value = sevedDataMes.email;
        message.value = sevedDataMes.message;
    }
}