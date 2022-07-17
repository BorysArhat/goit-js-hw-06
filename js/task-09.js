/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyToColorize = document.querySelector("body");

const buttonToColorize = document.querySelector(".change-color");

const colorizor = document.querySelector("span.color");

buttonToColorize.addEventListener("click", () => {
  bodyToColorize.style.background = getRandomHexColor();
  colorizor.textContent = getRandomHexColor();
});

/*
 
const inputCangeColor = document.querySelector('.change-color');
const toBody = document.querySelector('body');
const changeNameSpan = document.querySelector('span.color');
inputCangeColor.addEventListener('click', () => {
  toBody.style.background = getRandomHexColor();
  changeNameSpan.textContent = getRandomHexColor();
});
}
 */
