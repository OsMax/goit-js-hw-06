let counterValue = 0;
const inputResult = document.querySelector("#value");

const buttons = {
  buttonPlus: document.querySelector('[data-action="decrement"]'),
  buttonMinus: document.querySelector('[data-action="increment"]'),
};

buttons.buttonPlus.addEventListener("click", () => {
  counterValue--;
  inputResult.textContent = counterValue;
});
buttons.buttonMinus.addEventListener("click", () => {
  counterValue++;
  inputResult.textContent = counterValue;
});
