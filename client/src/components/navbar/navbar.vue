<template>
  <div class="vertical-navbar" id="sidebar">
    <router-link class="navbar-brand" :to="{name: 'prestazioni-generali'}">
      <img src="@/assets/img/logo1.png" alt="logo.png" />
    </router-link>

    <div class="link-background" :class="[isActive[0] ? 'active' : '']">
      <div class="line"></div>
      <img src="@/assets/svg/performance-generali.svg" class="link-svg" />
      <router-link :to="{name: 'prestazioni-generali'}" class="nav-link">Prestazioni generali</router-link>
    </div>
    <div class="link-background" :class="[isActive[1] ? 'active' : '']">
      <div class="line"></div>
      <img src="@/assets/svg/processo-produttivo.svg" class="link-svg" />
      <router-link :to="{name: 'processo-produttivo'}" class="nav-link">Processo produttivo</router-link>
    </div>
    <div class="link-background" :class="[isActive[2] ? 'active' : '']">
      <div class="line"></div>
      <img src="@/assets/svg/modifica-parametri.svg" class="link-svg" />
      <router-link :to="{name: 'modifica-parametri'}" class="nav-link">Modifica parametri</router-link>
    </div>
    <div class="link-background" :class="[isActive[3] ? 'active' : '']">
      <div class="line"></div>
      <img src="@/assets/svg/stato-macchine.svg" class="link-svg" />
      <router-link :to="{name: 'stato-macchine'}" class="nav-link">Stato macchine</router-link>
    </div>
    <div class="link-background" :class="[isActive[4] ? 'active' : '']">
      <div class="line"></div>
      <img src="@/assets/svg/anomalie.svg" class="link-svg" />
      <router-link :to="{name: 'anomalie'}" class="nav-link">Anomalie</router-link>
    </div>

    <div class="account">
      <div class="avatar">
        <img src="@/assets/img/Ing.png" alt />
      </div>
      <div class="account-details">
        <h4 class="name">Giangian Franka</h4>
        <button type="button">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  private isActive: boolean[] = [false, false, false, false, false];

  created() {
    this.checkRoute();
  }

  @Watch("$route")
  onUrlChange(value: string, oldValue: string) {
    this.checkRoute();
  }

  // function that set class 'active' to a nav-link based on current route
  checkRoute() {
    console.log(this.$route.name);
    switch (this.$route.name) {
      case "prestazioni-generali":
        this.isActive = [true, false, false, false, false];
        console.log(this.isActive);
        break;
      case "processo-produttivo":
        this.isActive = [false, true, false, false, false];
        console.log(this.isActive);
        break;
      case "modifica-parametri":
        this.isActive = [false, false, true, false, false];
        console.log(this.isActive);
        break;
      case "stato-macchine":
        this.isActive = [false, false, false, true, false];
        console.log(this.isActive);
        break;
      case "anomalie":
        this.isActive = [false, false, false, false, true];
        console.log(this.isActive);
        break;
    }
  }
}
</script>