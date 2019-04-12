<template>
    <div id="contenu">
        <v-img
                :src="require('../assets/logo.svg')"
                class="my-3"
                contain
                height="200"
        ></v-img>
        <v-card-text>
            <p class="text-md-center">Ici texte d'accueil</p>
        </v-card-text>
    </div>

</template>

<script>
    export default {
        name:"Accueil"
    }
</script>

<style>
    div#contenu{
        margin-top: 100px;
        align-items: center;
        align-content: center;

    }
</style>
