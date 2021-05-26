<template>
  <div id="app" class="bg-gray-100 flex justify-start h-screen relative">
    <aside class="h-full min-w-max py-5 pl-7 pr-12 sticky top-0 left-0 flex flex-col justify-between">
      <section aria-label="logo" class="mb-12">
        <h1 class="text-2xl text-indigo-500 font-serif">Fuudy</h1>
      </section>
      <nav class="flex-grow">
        <ul class="space-y-3">
          <li v-for="cat in cats" :key="cat.slug">{{cat.name}}</li>
        </ul>
      </nav>
    </aside>
    <main class="flex-grow bg-indigo-100">
      <header>
        
      </header>
      <router-view/>
    </main>
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
