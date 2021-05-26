<template>
  <div id="app" class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="max-w-2xl mx-auto relative bg-gray-50 shadow-xl p-5 rounded-sm">
      <nav class="flex justify-end items-center space-x-1 sticky top-0 py-5 z-10 ">
        <button>Home</button>
        <button>
          <span>Categories</span>
          <ul>
            <li ></li>
          </ul>
        </button>
        <button>Random</button>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      recipes: []
    }
  },
  methods: {
  }
})
</script>
<style>
nav > button {
  @apply text-gray-100 text-sm font-semibold tracking-tight bg-indigo-500 rounded-sm px-2 py-1 hover:bg-indigo-700;
}
</style>
