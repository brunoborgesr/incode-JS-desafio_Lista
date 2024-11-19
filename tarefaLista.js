let input = document.querySelector("#a");
let button = document.querySelector("#button");
let lista = document.querySelector("#lista");
let btn = document.querySelector("#btn");
let cor = document.querySelector("#cor");
let body = document.body;

button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  lista.appendChild(li);
  input.value = "";
  input.focus();
});

btn.addEventListener("click", () => {
  lista.textContent = " ";
});