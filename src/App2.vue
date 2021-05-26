<template>
  <div id="app" class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="max-w-2xl mx-auto relative bg-gray-50 shadow-xl p-5 rounded-sm">
      <div class="flex flex-col-reverse sm:flex-row justify-between sm:items-center bg-white sm:bg-transparent sticky top-0 py-3 z-10 w-full">
        <h1 class=" my-3  sm:my-0 text-xl tracking-tight border-b-8 border-gray-200 leading-3 text-indigo-600">{{routeName}}</h1>
        <nav class="space-x-1">
          <button @click="$router.push('/')">Home</button>
          <button class="relative px-1" @click="isCatsOpen = !isCatsOpen" @mouseover="isCatsOpen = true" @mouseleave="isCatsOpen = false">
            <span>Categories <svg :class="isCatsOpen ? 'rotate-180' : ''" class="transform transition-tranform duration-300 ease-in-out w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span>
            <ul v-if="isCatsOpen" class="absolute bg-indigo-200 w-full left-0 top-7 text-indigo-500 text-sm font-bold">
              <li v-for="cat in cats" :key="cat.slug" @click="$router.push({ name: 'category', params: { slug: cat.slug } })
" class="px-3 py-2 hover:text-indigo-600 hover:bg-indigo-300">{{cat.name}}</li>
            </ul>
          </button>
          <button>Random</button>
        </nav>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      recipes: [],
      cats: [{
        slug: "breakfast",
        name: "Breakfast"
      },{
        slug: "lunch",
        name: "Lunch"
      },{
        slug: "dinner",
        name: "Dinner"
      },{
        slug: "brunch",
        name: "Brunch"
      },{
        slug: "snack",
        name: "Snack"
      }],
      isCatsOpen: false
    }
  },
  methods: {
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  }
})
</script>
<style>
nav > button {
  @apply text-gray-100 text-sm font-semibold tracking-tight bg-indigo-500 rounded-sm px-2 py-1 hover:bg-indigo-700;
}
</style>
