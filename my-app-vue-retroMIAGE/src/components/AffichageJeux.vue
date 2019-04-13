<template>
    <div class="liste">

        <v-data-table
                :headers="headers"
                :items="listejeux"
                :expand="expand"
                item-key="name"
        >
            <template v-slot:items="props">
                <tr @click="props.expanded = !props.expanded">
                    <td class="text-xs-center">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.console }}</td>
                    <td class="text-xs-center" v-if="props.item.image!=''"><img v-bind:src="props.item.image"  width="200"></td>
                    <td class="text-xs-center" v-else><v-btn>Ajouter une image</v-btn></td>
                    <td class="justify-center layout px-0">
                        <v-icon small class="mr-2" @click="()=>{}">edit</v-icon>
                        <v-icon small @click="()=>{}">delete</v-icon>
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
    export default {
        name: "ListeJeux",
    data(){
        return{
            expand: false,
            headers: liste.data().headers,
            listejeux: liste.data().listejeux
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