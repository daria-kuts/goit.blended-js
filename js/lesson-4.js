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

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список