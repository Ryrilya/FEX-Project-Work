<template>
  <div class="in-costruzione">
    <h1>Pagina in costruzione</h1>
    <p>Ritorna alla home</p>
    <button type="button">
      <router-link :to="{path: '/'}" class="link">Home</router-link>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StatoMacchine extends Vue {}
</script>

<style scoped>
</style>