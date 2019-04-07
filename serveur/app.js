const express = require('express');
const serveIndex = require('serve-index');
const formidable = require('formidable');
const fs = require('fs');
const spawn = require('child_process').spawn;
const app = express();
const PORT = 3000;

app.use('/file', express.static('../'), serveIndex('../', {'icons': true}));

app.get('/upload', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/listeDeRoms', function(req, res) {
    let files = fs.readdirSync('/home/pi/RetroPie/roms/');
    res.send(files);
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

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);

    form.on('fileBegin', function (name, file){
       // file.path = '/home/pi/RetroPie/roms/nes/' + file.name;
      file.path = '/home/pi/projetNodeJS/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Nom du fichier chargé: ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log('Le serveur Node écoute sur le port: ', PORT);
});
