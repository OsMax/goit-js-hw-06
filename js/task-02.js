const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsToAdd = document.querySelector("#ingredients");
for (let elem of ingredients) {
  const element = document.createElement("li");
  element.innerText = elem;
  element.classList.add("item");
  ingredientsToAdd.append(element);
}
