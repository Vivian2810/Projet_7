import { RECIPES } from "/js/data/recipesData.js";

function createFilter() {
  var filter = document.getElementById("filters");
  filter.innerHTML = "";
  var ingredients = [];
  var equipments = [];
  var utensils = [];
  RECIPES.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (ingredients.indexOf(ingredient.ingredient) === -1)
        ingredients.push(ingredient.ingredient);
    });
    recipe.ustensils.forEach((u) => {
      if (utensils.indexOf(u) === -1) utensils.push(u);
    });
    if(equipments.indexOf(recipe.appliance) === -1) equipments.push(recipe.appliance);
  });
  filter.innerHTML += `
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <label for="ingredients">Ingrédients</label>
        <input type="text" id="ingredients" class="w-80 border-2 border-gray-400 rounded-lg" placeholder="Rechercher un ingrédient">
      </div>
      <div class="flex flex-col items-center">
        <label for="appareils">Appareils</label>
        <input type="text" id="appareils" class="w-80 border-2 border-gray-400 rounded-lg" placeholder="Rechercher un appareil">
      </div>
      <div class="flex flex-col items-center">
        <label for="ustensiles">Ustensiles</label>
        <input type="text" id="ustensiles" class="w-80 border-2 border-gray-400 rounded-lg" placeholder="Rechercher un ustensile">
      </div>
    </div>
  `;
}

export { createFilter };
