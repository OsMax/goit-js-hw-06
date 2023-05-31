const elem = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = elem.value + "px";
elem.addEventListener("input", () => {
  text.style.fontSize = elem.value + "px";
});
