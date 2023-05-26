const elem = document.querySelector("#validation-input");
elem.addEventListener("blur", () => {
  if (elem.value.length == elem.dataset.length) {
    elem.classList.add("valid");
    elem.classList.remove("invalid");
  } else {
    elem.classList.remove("valid");
    elem.classList.add("invalid");
  }
});
