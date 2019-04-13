<template>
    <div id="ajoutRom">

        <label class="file-select">
            <div class="select-button">
                <span v-if="value">Selected File: {{value.name}}</span>
                <span v-else>AJOUTER ROM</span>
            </div>
            <input type="file"/>
        </label>


        <v-card-text>
            <p class="text-md-center">A définir plus tard...</p>
        </v-card-text>

    </div>

</template>


<script>

    export default {
        name: "AjoutRom"
    }

</script>

<style>

    div#ajoutRom{
        margin-top: 100px;
        align-items: center;
        align-content: center;

    }

    .file-select > .select-button:hover{
        background-color: #dce4dd;
    }

    .file-select > .select-button {

        margin-left: 45%;
        vertical-align: middle;

        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

        padding: 1rem;

        cursor: pointer;

        color: black;
        background-color: #eaf1ea;

      /*  border-radius: .3rem; */

        text-align: center;
        font-weight: bold;
        width: 130px;
        height: 35px;
    }

    .file-select > input[type="file"] {
        display: none;
    }
</style>