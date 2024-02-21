import { RECIPES } from "/js/data/recipesData.js";
import { renderRecipes } from "/js/pages/components/cards.js";

const resetSearch = document.getElementById("resetSearch");
const searchBar = document.getElementById("searchBar");
const buttonSearch = document.getElementById("buttonSearch");

function initSearchBar() {
  resetSearch.addEventListener("click", () => {
    searchBar.value = "";
    renderRecipes(RECIPES);
  });
  buttonSearch.addEventListener("click", () => {
    renderRecipes(
      RECIPES.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchBar.value.toLowerCase())
      )
    );
  });
}

export { initSearchBar };
