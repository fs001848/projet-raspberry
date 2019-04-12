<template>
    <v-data-table
            :headers="headers"
            :items="listejeux"
            class="elevation-1"

    >

        <template slot="items" slot-scope="props" >
            <tr>
                <td>{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.console}}</td>
                <td class="imageDisplay" v-if="props.item.image!=''"><img v-bind:src="props.item.image"  width="200"></td>
                <td v-else><v-btn>Ajouter une image</v-btn></td>
                <td >
                    <v-icon small>edit</v-icon>
                    <v-icon small>delete</v-icon>
                </td>
            </tr>
        </template>

    </v-data-table>
</template>

<script>
    export default {
        name: "ListeJeux",
        data () {
            return {
                headers: [
                    {
                        text: 'Nom du jeux',
                        align: 'center',
                        value: 'name'
                    },
                    {text: 'Console', value: 'console'},
                    {
                        text: "Image du jeu",
                        align: 'center',
                        value:'image',
                        sortable: false
                    },
                    {text: 'Actions',
                        align: 'center',
                        sortable: false
                    }
                ],
                listejeux: [{
                    name: 'Super Mario Bros',
                    console: 'NES',
                    image:"https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/original/products/24509/22815/Super_Mario_Bros._box__09338.1397838384.jpg?c=2&imbypass=on"
                },
                    {
                        name: 'Mario Kart Wii',
                        console: 'Wii',
                        image:""
                    },
                    {
                        name: 'Nintendogs',
                        console: 'Nintendo DS',
                        image:""
                    },
                    {
                        name: 'Terranigma',
                        console: 'Super Nintendo',
                        image:"https://www.nautiljon.com/images/jeuxvideo/00/60/terranigma_1506.jpg"
                    },
                    {
                        name: 'Metroid Prime Hunters',
                        console: 'Nintendo DS',
                        image:""
                    }
                ]
            }
        }
    }

</script>

<style scoped>

    .elevation-1{
        margin-top: 70px;
        font-family: Avenir, sans-serif;

    }


</style>