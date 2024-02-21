"use strict";

import { RECIPES } from "/js/data/recipesData.js";

function createRecipeCard(recipe) {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="w-full h-full rounded-2xl overflow-hidden bg-white" id="${recipe.id}">
      <img src="/img/recipes/${
        recipe.cover
      }" class="object-cover w-full h-1/3" alt="">
      <div class="mt-5 mx-3 ">
        <h3 class=" font-bold">${recipe.name}</h3>
        <div class="mt-7 space-y-3">
          <p class="uppercase text-xs text-gray-400">Recette</p>
          <p class="card-text max-h-24 overflow-hidden">${recipe.description}</p>
        </div>
        <div class="mt-5 space-y-3">
          <p class="uppercase text-xs w-full text-gray-400 ">ingredients</p>
          <div class="grid text-sm grid-cols-2 gap-y-4">
          ${recipe.ingredients
            .map((ingredient) => {
              return ingredient.quantity
                ? `
              <div>
                <p>${ingredient.ingredient}</p>
                <p class="text-gray-400">${ingredient.quantity}</p>
              </div>
            `: `
            <div>
              <p>${ingredient.ingredient}</p>
              </div>
              `;
            })
            .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
  return card;
}

function renderRecipes() {
  const container = document.querySelector(".recipes-container");
  RECIPES.forEach((recipe) => {
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}

export { renderRecipes };
