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

            <v-text-field
            label="IP Raspberry">
            </v-text-field>

            <v-btn v-on:click="submit">go</v-btn>

        </v-card-text>
    </div>

</template>

<script>
    import ip from '../App'
    export default {

        name:"Accueil",
        methods: {
            submit: ()=>{
                console.log(ip.data().ip)
                this.ipRaspberry = "toto"
                console.log(this.ipRaspberry)
            }
        },
        data(){
            return{
                ipRaspberry:""
            }
        }
    }
</script>

<style>
    div#contenu{
        margin-top: 100px;
        align-items: center;
        align-content: center;
        margin-left: 200px;
        margin-right: 200px;

    }
</style>
