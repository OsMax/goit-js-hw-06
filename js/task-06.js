const elem = document.querySelector("#validation-input");

elem.addEventListener("blur", () => {
  if (elem.dataset.length) {
    if (elem.value.length === Number.parseInt(elem.dataset.length)) {
      check("valid", "invalid");
    } else {
      check("invalid", "valid");
    }
  } else {
    console.error("data-length not exist");
  }
});

function check(c1, c2) {
  elem.classList.add(c1);
  elem.classList.remove(c2);
}
