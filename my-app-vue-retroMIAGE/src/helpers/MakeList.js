export default function makeListe(liste) {
   var res = {
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
                value: 'image',
                sortable: false
            },
            {
                text: 'Actions',
                align: 'center',
                sortable: false
            }
        ],
        listejeux: []
    };

   for (var i = 0; i < liste.length; i++) {

        for (var j = 0; j < liste[i].jeux.length; j++){
            res.listejeux.push(
                {
                    name: liste[i].jeux[j],
                    console: liste[i].console,
                    image: "",
                    description: liste[i].jeux[j] + " est un jeu sur " + liste[i].console
                }
            )

        }
    }
    return res
}
