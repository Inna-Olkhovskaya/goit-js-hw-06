const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Напиши скрипт, который для каждого элемента массива ingredients:

/* 1. Создаст отдельный элемент <>.
Обзательно используй метод document.createElement().*/
//2. Добавит название ингредиента как его текстовое содержимое.
//3. Добавит элементу класс item.

const list = document.querySelector("#ingredients");
const liArray = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.classList.add('item');
  item.textContent = ingredient;
  liArray.push(item);
});

//4. После чего вставит все <li> за одну операцию в список ul#ingredients.

list.append(...liArray);


