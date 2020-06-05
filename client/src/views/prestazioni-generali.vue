<template>
  <div class="prestazioni-generali">
    <header>
      <h1>Prestazioni Generali</h1>
      <div class="calendar">
        <input type="date" id="date" :max="today" :value="today" />
      </div>
    </header>
    <div class="content">
      <div class="cards">
        <div class="card">
          <h3 class="card-title">Consumo elettrico</h3>
          <img src="@/assets/svg/consumo-elettrico.svg" alt="consumo-elettrico.svg" />
          <h2 class="card-value">32 Kw/h</h2>
        </div>
        <div class="card">
          <h3 class="card-title">Velocità produzione</h3>
          <img src="@/assets/svg/velocita-produzione.svg" alt="velocita-produzione.svg" />
          <h2 class="card-value">16 pz/h</h2>
        </div>
        <div class="card">
          <h3 class="card-title">Anomalie</h3>
          <img src="@/assets/svg/anomalie-pg.svg" alt="consumo-elettrico.svg" />
          <h2 class="card-value">4</h2>
        </div>
        <div class="card">
          <h3 class="card-title">N. Pezzi prodotti</h3>
          <img src="@/assets/svg/n-pezzi-prodotti.svg" alt="n-pezzi-prodotti.svg" />
          <h2 class="card-value">845</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PrestazioniGenerali extends Vue {
  private today!: string;

  created() {
    this.setToday();
  }

  // Set the input[type=date] max day to today
  setToday() {
    const date = new Date();
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    const yyyy = date.getFullYear().toString();
    if (parseInt(dd) < 10) dd = "0" + dd;
    if (parseInt(mm) < 10) mm = "0" + mm;

    this.today = yyyy + "-" + mm + "-" + dd;
  }
}
</script>
