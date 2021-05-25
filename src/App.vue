<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <span @click="fetch">Hasan</span>
      {{results}}
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import recipeService from '@/services/recipeService'
import {AxiosResponse} from 'axios'
export default Vue.extend({
  data() {
    return {
      results: {} as AxiosResponse
    }
  },
  methods: {
    async fetch () {
      await recipeService.complexSearch({
        query: 'egg',
        cuisine: 'european'
      }).then((resp) => {
        this.results = resp.data
      }).catch( err => {
        return err
      })
    }
  }
})
</script>
<style>

</style>
