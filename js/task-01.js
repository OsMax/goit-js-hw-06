const cat_children = document.getElementById("categories").children;
console.log(`Number of categories: ${cat_children.length}`);

[...cat_children].forEach((element) => {
  console.log("\n");
  console.log(`Category: ${element.querySelector("h2").innerText}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
