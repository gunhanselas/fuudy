<template>
  <div class="home">
    <div v-if="recipes.length" class="p-2 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-2">
      <div v-for="(recipe) in recipes" :key="recipe.id" class="bg-white p-2 relative">
        <div class="flex jusify-start items-start">
          <figure class="min-w-max w-24 h-24  rounded-full border-8">
            <img  :src="recipe.image" :alt="`${recipe.title} image`" class="rounded-full w-24 h-24">
          </figure>
          <section aria-labelledby="Recipe name and calorie" class="p-3 ">
            <h2>
              {{recipe.title}}
            </h2>
          </section>
        </div>
        <main>
          <h3 class="text-lg text-indigo-500">Ingridents</h3>
          <ul class="space-x-2 space-y-2">
            <li v-for="item in recipe.extendedIngredients.slice(0,4)" :key="item.id + recipe.id" class="bg-indigo-50 rounded-md p-1 inline-block">
              <img class="w-12 h-12" :src="`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`" :alt="item.name">
            </li>
          </ul>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import recipeService from '@/services/recipeService'
export default Vue.extend({
  name: 'Home',
   data() {
    return {
      recipes: [],
      mouseOverItem: null
    }
  },
  components: {
  },
  methods: {
    async fetch (amount : number) {
      await recipeService.getRandom(amount).then((resp) => {
        this.recipes = resp.data.recipes
      }).catch( err => {
        return err
      })
    }
  },
  computed: {
  },
  mounted() {
    this.fetch(12)
  }
});
</script>
