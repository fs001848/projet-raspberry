const express = require('express');
const serveIndex = require('serve-index');
const formidable = require('formidable');
const fs = require('fs');
const spawn = require('child_process').spawn;
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

const cheminDeBase = '/home/pi/RetroPie/roms/';
// var cheminDeBase = '/Users/fatoudiop/Desktop/miage2018-2019/projetRaspberry/projet-raspberry/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/file', express.static('../'), serveIndex('../', {'icons': true}));

app.get('/upload', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/listeConsoles', function(req, res) {
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

// Permet de lancer la commande ls
// lancer dans l'url du navigateur: http://IP_Server:3000/lancerCommandeLs
// '/Users/' peut être modifié par le chemin du répertoire dont on veut lister le contenu
app.get('/lancerCommandeLs', function(req, res) {
    ls    = spawn('ls', ['', '/Users/']);
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
  let cheminSuppressionFichier = '/home/pi/RetroPie/roms/'+req.body.console+ '/' + req.body.jeu; //+ '.zip';
  fs.unlink(cheminSuppressionFichier, function (err) {
    if (err) throw err;
    res.send('Fichier supprimé!!');
  });
});


/**
Ajout d'un fichier dans le serveur
*/
app.post('/', function (req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);

    form.on('fileBegin', function (name, file){
      console.log('----> file: ', file);
       // file.path = '/home/pi/RetroPie/roms/nes/' + file.name;
      file.path = cheminDeBase + file.name;
    });

    form.on('file', function (name, file){
        console.log('Nom du fichier chargé: ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log('Le serveur Node écoute sur le port: ', PORT);
});
