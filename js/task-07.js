/*Напиши скрипт, который реагирует на изменение значения input#font-size-control
 (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
 В результате при перетаскивании ползунка будет меняться размер текста.*/

const inputChangeEl = document.querySelector("input#font-size-control");
const abracadabraEl = document.querySelector("span#text");

inputChangeEl.addEventListener("change", (input) => {
  abracadabraEl.style.fontSize = `${input.target.value}px`;
});
