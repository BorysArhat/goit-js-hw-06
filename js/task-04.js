/*
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const counterValueReference = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", clickDecrement);

function clickDecrement() {
  counterValue -= 1;
  counterValueReference.textContent = counterValue;
}

incrementBtn.addEventListener("click", clickIncrement);

function clickIncrement() {
  counterValue += 1;
  counterValueReference.textContent = counterValue;
}
