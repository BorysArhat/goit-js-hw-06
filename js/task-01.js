const categories = document.querySelectorAll(".item");
const numberfCategories = categories.length;
console.log(`Number of categories: ${numberfCategories}`);

[...categories].forEach(function (element) {
  const nameOfCategory = element.querySelector("h2");
  console.log(`Category: ${nameOfCategory.textContent}`);

  const numberOfItems = element.querySelectorAll("li");
  console.log(`Elements: ${numberOfItems.length}`);
});

// const list = document.querySelector("#categories");
// const children = list.children;
// console.log(`Number of categories: ${children.length}`);

// [...children].forEach((el) => {
//   console.dir(`Category: ${el.children[0].textContent}`);
//   console.log(`Elements: ${el.children[1].children.length}`);
// });
