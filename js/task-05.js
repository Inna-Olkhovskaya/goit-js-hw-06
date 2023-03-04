/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. Если инпут пустой,
 в спане должна отображаться строка "Anonymous".*/

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (evt) => {
  outputEl.textContent = evt.target.value.trim();
  if (evt.target.value === "") {
    outputEl.textContent = "Anonymous";
  }
});


