/*Напиши скрипт который:
1. Посчитает и выведет в консоль количество категорий
 в ul#categories, то есть элементов li.item.
2. Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега <h2>)
 и количество элементов в категории (всех вложенных в него <li>).
Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.*/

const listEl = document.querySelector("#categories");
const itemEl = listEl.children;

console.log(`Number of categories: ${itemEl.length}`);

const ul = document.querySelectorAll("#categories > li");
ul.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
  );
});


