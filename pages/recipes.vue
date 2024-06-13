<script setup>
useHead({
  title: "Recipes | List",
  meta: [{ name: "description", content: "All recipes" }],
});

const { data: recipe } = await useFetch("/api/recipes/1");
console.log("recipe", recipe);
if (!recipe.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Recipe not found",
    fatal: true,
  });
}
</script>

<template>
  <div>
    <p>Recipe of a day</p>
    <!-- {{ recipe }} -->
    <hr />
    <h3>{{ recipe.name }}</h3>
    <hr />
    <ol>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ol>
    <hr />
    <div>
      <h2>Instructions</h2>
      <p v-for="instruction in recipe.instructions" :key="instruction">
        {{ instruction }}
      </p>
    </div>
    <p>Prep time: {{ recipe.prepTimeMinutes }}</p>
    <p>Servings: {{ recipe.servings }}</p>
    <p>Difficulty: {{ recipe.difficulty }}</p>
    <p>Calories: {{ recipe.caloriesPerServing }}</p>
    <p>Rating: {{ recipe.rating }}</p>
  </div>
</template>
