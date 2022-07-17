const inputRef = document.querySelector("#name-input");

const inputContent = document.querySelector("#name-output");

inputRef.addEventListener("input", ({ target: { value } }) => {
  inputContent.textContent = value;
  if (value.trim() === "") {
    inputContent.textContent = "Anonimous";
  }
});
