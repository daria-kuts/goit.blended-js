// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector('body')
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const elTitle = document.querySelector('#title')
console.log(elTitle);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector('.list')
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]')
console.log(dataTopic)
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicFirst = document.querySelector('[data-topic]')
console.log(dataTopicFirst);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataTopicLast = dataTopic[dataTopic.length - 1];
console.log(dataTopicLast);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1El = document.querySelector('h1')
console.log(h1El.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const allH3 = document.querySelectorAll('h3');
allH3.forEach((elem) => {
    console.log(elem.textContent);
    elem.classList.add("active")
})
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liNav = document.querySelector('[data-topic = navigation]')
console.log(liNav);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liNav.style.backgroundColor = "yellow"
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const pEl = liNav.querySelector('p');
pEl.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation"; 
const findEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(findEl);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
findEl.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleCompl = document.querySelector(".completed");
console.log(titleCompl);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const liDel = titleCompl.parentElement;
liDel.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newP = document.createElement("p");
newP.textContent = "Об'єктна модель документа (Document Object Model)";
listEl.prepend(newP);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newListItem = document.createElement("li");
// const h3 = document.createElement("h3");
// const p = document.createElement("p");
// h3.textContent = "Властивість innerHTML";
// p.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newListItem.append(h3, p);
// listEl.append(newListItem);
// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const html = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
  </li>
`;

listEl.insertAdjacentHTML("beforeend", html);
// 20 - очисти список


// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;


// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.
