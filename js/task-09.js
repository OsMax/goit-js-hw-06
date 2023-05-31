function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector(".change-color").addEventListener("click", () => {
  const color = getRandomHexColor();
  const bodyBgc = document.body;
  const textColor = document.querySelector(".color");

  bodyBgc.style.backgroundColor = color;
  textColor.textContent = color;
});
