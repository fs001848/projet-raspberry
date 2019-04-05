<template >

  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="#708090" dark fixed>

        <img src="src/assets/retroMIAGE.png"  width="70" align="left">
        <v-toolbar-title >RetroMiage WebConsole</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat @click="show_installroms()">Installation de ROM</v-btn>
          <v-btn flat @click="show_listejeux()">Liste des jeux</v-btn>

        </v-toolbar-items>
      </v-toolbar>
      <app-listejeux v-if="show1"></app-listejeux>

    </v-app>
  </div>
</template>

<script>
  import ListeJeux from "./ListeJeux.vue"
export default {
  name: 'app',
  data() {
    return {
      show1 : true,
      show2 : false,
    }
    },
  components: {
    'app-listejeux': ListeJeux
  },
  methods: {
    show_listejeux() {
      this.show1 = true;
      this.show2 = false
    },
    show_installroms(){
      this.show1 = false;
      this.show2 = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}


</style>
