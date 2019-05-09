const express = require('express');
var multer = require("multer");
const serveIndex = require('serve-index');
const formidable = require('formidable');
const fs = require('fs');
const spawn = require('child_process').spawn;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Dossier de stockage des fichiers dans le serveur
var storage = multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({
  storage: storage
});

//var cheminDeBase = '/home/sylvain/Documents/cours/M1/projet_S2/chemin_simulation';
//var cheminDeBase = '/media/sylvain/retropie/home/pi/RetroPie/roms';
// var cheminDeBase = '/Users/fatoudiop/Desktop/miage2018-2019/projetRaspberry/projet-raspberry/';

const cheminDeBase = '/home/pi/RetroPie/roms/';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('~/projet-raspberry/serveur'));

// SUPPORT CROSS ORIGIN
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE ");

    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// 
app.post('/uploadFile', upload.array('file'), function (req, res) {

    console.log("received " + req.files.length + " files"); // form files
    for (var i = 0; i < req.files.length; i++) {
        console.log("### " + String(req.files[i].path));
        var oldPath = '' + req.files[i].path;
        var newPath = path.resolve(cheminDeBase + req.body.console, (req.files[i].path).split('/')[1]);
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err
        });
    }
    console.log('Fichiers placés dans le bon dossier!')
    res.send(JSON.stringify(200));
});


app.get('/listeConsoles', function (req, res) {
    let consoles = fs.readdirSync(cheminDeBase);
    res.send(consoles);
});

// Permet de récupérer la liste de tous les jeux en fonction de leur type de console
// La réponse renvoyée est au format suivant:
// [{'console': 'amiga', 'jeux': ['jeu_1','jeu_2','jeu_N']}, {'console': 'nes', 'jeux': ['jeu_1','jeu_2','jeu_N']}]
app.get('/listeJeux', function(req, res){
  // Déclaration du tableau qui sera rempli et renvoyé
  let listeJeux = [];
  // Explorer le contenu du chemin pour récupérer la liste des consoles de jeux
  fs.readdir(cheminDeBase, function(err, consoles) {
    if (err) throw err;
    // Parcourir la liste des consoles pour récupérer la liste des jeux
    consoles.forEach(function(consoleIndividuelle, index){
      console.log('---> consoleIndividuelle: ', consoleIndividuelle);
      // Reconstruire le chemin d'accès au type de console en cours de traitement
      cheminConsole = path.resolve(cheminDeBase, consoleIndividuelle);
      
      if(fs.lstatSync(cheminConsole).isDirectory()){
        console.log('*****> cheminConsole: ', cheminConsole);
        let jeux = fs.readdirSync(cheminConsole);
        listeJeux.push({'console': consoleIndividuelle, 'jeux': jeux})
      }
      if(index >= consoles.length-1){
        res.send(listeJeux);
      }
    });
  });
});

app.get('/listeJeuxSimulee', function (req, res) {
    let listeJeux = {
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
    res.send(JSON.stringify(listeJeux));
});

// Permet de lancer la commande ls
// lancer dans l'url du navigateur: http://IP_Server:3000/lancerCommandeLs
// '/Users/' peut être modifié par le chemin du répertoire dont on veut lister le contenu
app.get('/lancerCommandeLs', function (req, res) {
    ls = spawn('ls', ['', '/Users/']);
    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + (data.toString()).split(' '));
        res.send(data.toString());
    });

    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
    });

    ls.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
    });
});

/**
 Pour supprimer un jeu, il faut utiliser le méthode DELETE avec un body au format suivant:
 {"console": "nes", "jeu": "jeu1"} pour pouvoir récupérer aussi bien le type de console que
 le nom du jeu (fichier zip) lui même
*/
app.delete('/supprimerFichier', function(req, res){
  let cheminSuppressionFichier = cheminDeBase+"/"+req.body.console+ '/' + req.body.jeu; //+ '.zip';
  fs.unlink(cheminSuppressionFichier, function (err) {
    if (err) throw err;
    res.send('Fichier supprimé !');
  });
});

function placerFichierDansLeBonDossier(fichier, dossier) {

}

app.listen(PORT, function () {
    console.log('Le serveur Node écoute sur le port: ', PORT);
});
