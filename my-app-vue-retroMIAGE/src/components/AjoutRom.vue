<template>
    <div id="ajoutRom" >
        <v-card
        hover=true>

            <v-form
                    @submit="envoieFormEtFichiers">

                <v-card-title primary-title>
                    <div>
                        <div class="headline">Choisissez la ROM à ajouter</div>
                    </div>
                </v-card-title>


             <label>Choix console : <input type="text" name="console"></label>
                <br>

                <label>Sélectionnez un ou plusieurs fichiers :
                    <input id="file" type="file" multiple />
                </label>
                <br>
                <v-btn
                        type="submit"
                        value="Submit"
                >Envoi</v-btn>
            </v-form>

        </v-card>

    </div>

</template>


<script>

    import $ from 'jquery'
    $(document).ready(function(){
        //const url = 'http://192.168.1.50:3000/listeConsoles';
        const url = "http://localhost:3000/listeConsoles";
        $.ajax({
            url: url,
            type: 'GET',
            success: function(reponse){
                console.log('Result: ', reponse);
                $.each(reponse, function(index, valeur) {
                    $('#selection').append($('<option>', {
                        value: valeur,
                        text: valeur
                    }));
                });
            },
            error: function(error){
                console.log('Error...');
            }
        });
    });


    export default {
        name: "AjoutRom",
        methods: {
            envoieFormEtFichiers: function(event) {
                // éviter que la page se réaffiche et que le formulaire
                // soit posté par défaut par le browser
                event.preventDefault();

                // on récupère le formulaire, comme c'est lui qui a
                // généré l'event submit, on le récupère dans event.target
                let form = event.target;

                // données du formulaire, ici on récupère tous les champs
                // mais pas les fichiers
                var data = new FormData(form);

                // on ajoute les fichiers au formData
                // il est important qu'ils aient tous la même
                // clé "file" quand on fait data.append
                var fileInput = document.querySelector('#file');

                for (var i = 0; i < fileInput.files.length; i++)
                    data.append('file', fileInput.files[i]);

                // on envoie le formulaire par POST
                fetch('http://localhost:3000/uploadFile', {
                    method: 'POST',
                    body: data
                })
                    .then((responseJSON) => {
                        responseJSON.json()
                            .then((resJS) => {
                                // Maintenant resJS est un vrai objet JavaScript
                                console.log("réponse : " + resJS.msg);

                                // on remet les champs du form à vide et on affiche
                                // les images uploadées...
                                form.reset()
                                //showUploadedImages();
                            });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        }
    }

</script>

<style>

    div#ajoutRom{
        width: 50%;
        margin: 0 auto;
        padding-top: 100px;

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