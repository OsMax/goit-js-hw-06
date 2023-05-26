const elem = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

elem.addEventListener("input", () => {
  text.style.fontSize = elem.value + "px";
});
