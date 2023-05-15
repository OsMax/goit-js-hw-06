let counterValue = 0;

const buttons = {
  buttonPlus: document.querySelector('[data-action="decrement"]'),
  buttonMinus: document.querySelector('[data-action="increment"]'),
  inputResult: document.querySelector("#value"),
};

buttons.buttonPlus.addEventListener("click", () => {
  counterValue--;
  buttons.inputResult.innerHTML = counterValue;
});
buttons.buttonMinus.addEventListener("click", () => {
  counterValue++;
  buttons.inputResult.innerHTML = counterValue;
});
