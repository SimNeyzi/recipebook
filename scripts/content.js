// var classes = document.querySelectorAll('div[class^="recipe"]');

// var ids = document.querySelectorAll('div[id^="recipe"]');

//food network
let recipe = { ingredients: [], directions: [] };

console.log("Start");

let fnIngredientsList = document.querySelectorAll(
  ".o-Ingredients__a-Ingredient--CheckboxLabel"
);

fnIngredientsList = [...fnIngredientsList];

for (let i = 0; i < fnIngredientsList.length; i++) {
  if (fnIngredientsList[i].textContent === "Deselect All") {
    continue;
  }
  recipe.ingredients.push(fnIngredientsList[i].textContent);
}

let fnDirections = document.querySelectorAll(".o-Method__m-Step");

fnDirections = [...fnDirections];

for (let i = 0; i < fnDirections.length; i++) {
  let clean = fnDirections[i].textContent.slice(2).trim();
  recipe.directions.push(clean);
}

console.log("recipe: ", recipe);

//create icon
const container = document.createElement("div");
const icon = document.createElement("img");
icon.src = "https://img.icons8.com/?size=512&id=uDEdH9aPMTNX&format=png";
icon.alt = "recipe icon";
icon.classList.add("icon");

const footer = document.querySelector(".footer");

// badge.textContent = "BADGE HERE";
footer.insertAdjacentElement("beforebegin", container);
container.appendChild(icon);

let modal = document.createElement("div");
modal.classList.add("modal");
let modalBg = document.createElement("div");
modalBg.classList.add("modal-bg", "modal-exit");
let modalContainer = document.createElement("div");
modalContainer.classList.add("modal-container");
let closeBtn = document.createElement("button");
closeBtn.classList.add("modal-close", "modal-exit");
closeBtn.textContent = "X";

modal.appendChild(modalBg);
modal.appendChild(modalContainer);
modalContainer.appendChild(closeBtn);

container.after(modal);

// const myFunc = () => {
//   let popup = document.createElement("div");
//   popup.classList.add("popup");
//   popup.textContent = "tarif buraya";
//   container.appendChild(popup);
// };
// container.addEventListener("click", myFunc);

container.addEventListener("click", function (event) {
  console.log("clicked");
  event.preventDefault();

  modal.classList.add("open");
  const exits = modal.querySelectorAll(".modal-exit");
  exits.forEach(function (exit) {
    exit.addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.remove("open");
    });
  });
});
