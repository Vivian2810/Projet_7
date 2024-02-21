"use strict";

import { renderRecipes } from "./pages/components/cards.js";
import { createFilter } from "./pages/components/filters.js";
import { initSearchBar } from "./pages/components/searchBar.js";
import { RECIPES } from "./data/recipesData.js";

function init() {
  createFilter();
  renderRecipes(RECIPES);
  initSearchBar();
}

init();
