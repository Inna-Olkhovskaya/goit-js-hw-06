/* Счетчик состоит из спана и кнопок, которые, при клике,
 должны увеличивать и уменьшать его значение на единицу.
 - Создай переменную counterValue,
  в которой будет храниться текущее значение счетчика
   и инициализируй её значением 0.
 - Добавь слушатели кликов на кнопки,
  внутри которых увеличивай или уменьшай значение счтетчика.
 - Обновляй интерфейс новым значением переменной counterValue.*/

const ref = {
  decrement: document.querySelector('[data-action = "decrement"]'),
  increment: document.querySelector('[data-action = "increment"]'),
  span: document.querySelector("#value"),
};

ref.decrement.addEventListener('click', () => {
    ref.span.textContent -= 1;
});

ref.increment.addEventListener("click", () => {
    let counterValue = parseInt(ref.span.textContent);
    ref.span.textContent = counterValue + 1;
});