<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="liste">

        <v-dialog v-model="dialog" max-width="3000px"> //la boite de dialogue pour modifier le jeu

            <v-card>
                <v-card-title>
                    <span class="headline">Modifier les données du jeu</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="jeuChoisi.name" label="Nom Jeu"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="jeuChoisi.console" label="Console"></v-text-field>
                            </v-flex>
                            <v-flex  xs12 >
                                <v-text-field v-model="jeuChoisi.description" label="Description"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red"  @click="cancel">Annuler</v-btn>
                    <v-btn color="blue"  @click="save">Modifier</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card-title>

            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Recherche"
                    single-line
                    hide-details
                    max-width="100px"
            ></v-text-field>
        </v-card-title>


        <v-data-table
                :headers="headers"
                :items="listejeux"
                :expand="expand"
                item-key="name"
                :search="search"
        >
            <template v-slot:items="props" >
                <tr @click="props.expanded = !props.expanded">
                    <td class="text-xs-center" >{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.console }}</td>
                    <td class="text-xs-center" v-if="props.item.image!=''"><img v-bind:src="props.item.image"  width="200"></td>
                    <td class="text-xs-center" v-else><v-btn>Ajouter une image</v-btn></td>
                    <td class="justify-center layout px-0">
                        <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                        <v-icon small @click="deleteJEU(props.item)">delete</v-icon>
                    </td>
                </tr>
            </template>
            <template v-slot:expand="props">
                <v-card flat>
                    <v-card-text id="descriptif"><b>Descriptif :</b> {{props.item.description}}</v-card-text>
                </v-card>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import liste from '../helpers/ListeJeux'
    import makelist from '../helpers/MakeList'

    export default {
        name: "ListeJeux",


        data(){

            return{
                search:'',
                dialog: false,
                indexJeu: 0,
                jeuChoisi: {
                    nom: '',
                    console: '',
                    description: ''
                },
                expand: false,
                headers: [],
                listejeux: []
            }
        },
        // Comme dans les restaurants, méthode mounted
        mounted() {
            let url = "http://localhost:3000/listeJeux"; //"http://192.168.1.44:3000/listeJeux"; // ici la route du serveur !
            // On récupère la liste des jeux sur le serveur
            fetch(url)
                .then((responseJson) => {
                    return responseJson.json()
                }).then((data) => {
                    var gamelist = makelist(data);
                    this.headers = gamelist.headers;
                    this.listejeux = gamelist.listejeux;
                   // this.listejeux = data.listejeux;
                    //this.headers = data.headers;
                })
        },

        methods: {
            deleteJEU: function (jeu) {
                if( confirm("Etes-vous sûr de vouloir supprimer ce jeu?")){
                    fetch("http://localhost:3000/supprimerFichier", {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json'},
                        body: JSON.stringify({console: jeu.console, jeu: jeu.name})
                    })
                        .then(res => res.text()) // OR res.json()
                        .then(res => console.log(res))

                    console.log(jeu.name + " supprimé");
                    this.listejeux.splice(this.listejeux.indexOf(jeu),1);
                }

            }
            ,
            editItem: function(item) {
                this.indexJeu = this.listejeux.indexOf(item)
                this.jeuChoisi = Object.assign({}, item)
                this.dialog = true
            },


            cancel: function() {
                this.dialog = false
            },

            save: function () {

                fetch("http://localhost:3000/modifierNomJeu", {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({console: this.listejeux[this.indexJeu].console, ancienNom: this.listejeux[this.indexJeu].name, nouveauNom: this.jeuChoisi.name})
                })
                    .then(res => res.text()) // OR res.json()
                    .then(res => console.log(res))

                console.log("nom jeu modifié !!")
                Object.assign(this.listejeux[this.indexJeu], this.jeuChoisi)

                this.cancel()
            }
        }
    }


</script>

<style scoped>

    .liste{
        margin-top: 70px;
        font-family: Avenir, sans-serif;

    }



</style>