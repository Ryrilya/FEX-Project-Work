<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/navbar/navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="sass">
@import './design/index.sass'
</style>
