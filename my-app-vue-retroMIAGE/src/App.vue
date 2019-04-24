<template>
  <v-app>
    <template >
      <v-toolbar id="navigateur" color="#708090" dark fixed>
        <router-link to="/">
          <img src="./assets/retroMIAGE.png"  width="70" align="left">
        </router-link>
        <v-toolbar-title >RetroMiage WebConsole</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" >
          <router-link to="/ajoutRom">
            <v-btn flat>Installation de ROM</v-btn>
          </router-link>

          <router-link to="/affichageJeux">
            <v-btn flat>Liste des jeux</v-btn>
          </router-link>
                    <router-link to="/aide">
            <v-btn flat>Manuel d'utilisation</v-btn>
          </router-link>
        </v-toolbar-items>
      </v-toolbar>
    </template>

    <router-view></router-view>

  </v-app>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data () {
            return {
                //
            }
        }
    }
</script>

<style>
  #navigateur {
    font-family: Avenir, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    align-content: center;
    align-items: center;
    color: #2c3e50;

  }

  .hidden-sm-and-down{
    padding-top: 20px;
  }
</style>