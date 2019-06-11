<template>
    <div id="contenu">
        <img id="gif"
                :src="require('../assets/Rasp_turn_around.gif')" />

        <v-card-text>

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
    img#gif{
        margin-left: 40%;
    }
</style>
