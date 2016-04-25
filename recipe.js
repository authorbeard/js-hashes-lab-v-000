'use strict';

function addIngredient(recipe, ingName, amts) {
  recipe[ingName]=amts;
  return recipe;
}

function removeIngredient(recipe, ingName) {
  delete recipe[ingName];
  return recipe;
}

function updateIngredient(recipe, ingName, amt) {
  recipe[ingName]=amt;
  return recipe;
}

function readRecipe(recipe) {
  for (var key in recipe) {
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  };
}