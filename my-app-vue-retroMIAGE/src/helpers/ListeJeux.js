export default {
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
                    value: 'image',
                    sortable: false
                },
                {
                    text: 'Actions',
                    align: 'center',
                    sortable: false
                }
            ],
            listejeux: [{
                name: 'Super Mario Bros',
                console: 'NES',
                image: "https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/original/products/24509/22815/Super_Mario_Bros._box__09338.1397838384.jpg?c=2&imbypass=on",
                description: "Super Mario Bros. sur Nes est un jeu de plates-formes mettant en scène le désormais célèbre plombier à moustache et salopette rouge. Traversez de nombreux niveaux, sautez sur vos ennemis pour les éliminer, ramassez des champignons pour grandir et des fleurs pour cracher du feu. Affrontez le méchant Bowser et ses sbires afin de délivrer la délicieuse princesse Peach."
            },
                {
                    name: 'Mario Kart Wii',
                    console: 'Wii',
                    image: "",
                    description: "Mario Kart Wii est le sixième volet de la fameuse série de Nintendo. Les courses de karting prennent ici des allures de folie avec pas moins de 12 participants en lice. Parmi les nouveautés, cet épisode ajoute la possibilité de jouer en ligne via la Wi-Fi Connection et de piloter des motos en plus des karts habituels. De nouvelles options font aussi leur apparition et le soft est vendu avec un volant, le Wii Wheel, qui renouvelle habilement les sensations de jeu."
                },
                {
                    name: 'Nintendogs',
                    console: 'Nintendo DS',
                    image: "",
                    description: "Avec un choix initial d'adoption parmi 6 races et 14 à débloquer, Nintendogs : Labrador & ses Amis sur DS vous propose de vous occuper d'un petit chiot. Vous devrez passer du temps avec votre ami, le dresser, le nourrir, jouer avec-lui et ensuite le présenter à des concours pour lui faire gagner plein d'objets."
                },
                {
                    name: 'Terranigma',
                    console: 'Super Nintendo',
                    image: "https://www.nautiljon.com/images/jeuxvideo/00/60/terranigma_1506.jpg",
                    description: "Terranigma est un jeu de rôle orienté action sur Super Nintendo. Vous incarnez Ark, un jeune homme qui, incapable de résister à sa curiosité, ouvre une boîte interdite qui transforme tous les habitants du village en pierre. Il devra partir à l'aventure à la recherche des Cinq Tours pour trouver une solution à ce terrible problème."
                },
                {
                    name: 'Metroid Prime Hunters',
                    console: 'Nintendo DS',
                    image: "",
                    description: "Metroid Prime : Hunters sur DS est un jeu d'action/aventure dans lequel vous retrouvez la chasseuse de primes Samus Aran, engoncée dans son armure et à la recherche de reliques laissées par une race guerrière aujourd'hui disparue. Tous vos concurrents accourent par-delà les galaxies pour les trouver, à vous d'être plus rapide et efficace. Un mode multi permet d'affronter ses amis et ses rivaux grâce à la communication sans fil."
                }
            ]
        }
    }
}
