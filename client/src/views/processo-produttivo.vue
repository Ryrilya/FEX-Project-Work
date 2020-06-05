<template>
  <div class="processo-produttivo">
    <header>
      <h1>Processo Produttivo</h1>
      <div class="calendar">
        <input type="date" id="date" :max="today" :value="today" />
      </div>
    </header>
    <div class="content">
      <div class="graphs">
        <div class="card">
          <div class="chart-container">
            <ProduzionePezzi
              :data="produzionePezziData"
              :options="produzionePezziOptions"
              id="produzione-pezzi"
            />
          </div>
        </div>
        <div class="card">
          <div class="chart-container">
            <PezziBuoniDifettosi
              :data="pezziBuoniDifettosiData"
              :options="pezziBuoniDifettosiOptions"
              id="pezzi-buoni-difettosi"
            />
          </div>
        </div>
      </div>
      <div class="numbers">
        <div class="card">
          <h3>Produzione Totale</h3>
          <div class="value">
            <p>3746</p>
          </div>
        </div>
        <div class="card">
          <h3>Velocità attuale / MAX</h3>
          <div class="value">
            <p>16 / 30</p>
          </div>
        </div>
      </div>
      <div class="objectives">
        <div class="card">
          <h3>Obiettivi</h3>
          <div class="objectives-cards">
            <div class="objective">
              <p>Obiettivo 1</p>
            </div>
            <div class="objective">
              <p>Obiettivo 2</p>
            </div>
            <div class="objective">
              <p>Obiettivo 3</p>
            </div>
            <div class="objective">
              <p>Obiettivo 4</p>
            </div>
            <div class="objective">
              <p>Obiettivo 5</p>
            </div>
            <div class="objective">
              <p>Obiettivo 6</p>
            </div>
            <div class="objective">
              <p>Obiettivo 7</p>
            </div>
            <div class="objective">
              <p>Obiettivo 8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import ProduzionePezzi from "@/components/produzione-pezzi-chart.vue";
import PezziBuoniDifettosi from "@/components/pezzi-buoni-difettosi.vue";

@Component({
  components: {
    ProduzionePezzi,
    PezziBuoniDifettosi
  }
})

@Component
export default class ProcessoProduttivo extends Vue {}
</script>
