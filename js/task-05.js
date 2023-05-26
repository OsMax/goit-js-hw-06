const elems = {
  inputElem: document.querySelector("#name-input"),
  nameElem: document.querySelector("#name-output"),
};

elems.inputElem.addEventListener("input", (event) => {
  elems.nameElem.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    elems.nameElem.textContent = "Anonymous";
  }
});
