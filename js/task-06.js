/* Напиши скрипт, который при потере фокуса на инпуте (событие blur),
 проверяет его содержимое на правильное количество введённых символов.
  - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 - Если введено подходящее количество символов, 
 то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid,
 которые мы уже добавили в исходные файлы задания.*/

const correctInputEl = document.querySelector("#validation-input");

correctInputEl.addEventListener("blur", (event) => {
  if (event.target.value.length == correctInputEl.getAttribute("data-length")) {
    correctInputEl.classList.add("valid");
    if (correctInputEl.classList.contains("invalid")) {
      correctInputEl.classList.remove("invalid");
    }
  } else {
    if (correctInputEl.classList.contains("valid")) {
      correctInputEl.classList.remove("valid");
    }
    correctInputEl.classList.add("invalid");
  }
});















