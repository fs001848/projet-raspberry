<template>
    <div id="aide">
       <h1 style="font-size: x-large">Page d’accueil : Connexion avec l’adresse IP</h1>
        <p>
            <span>De quel matériel ai-je besoin ?</span><br/>
        Vous avez besoin d’un raspberry imagée avec Retropie et de son adresse IP. Et c’est tout :).</p>

       <p><span> Comment faire les branchements de mon raspberry ?</span><br/>

        Vous avez plusieurs possibilités : si vous passez par un réseau local, vous n’avez qu’à brancher un câble ETHERNET à votre raspberry et récupérer son IP.
        Si vous passez par du Wi-fi, vous devez lancer le raspberry, accéder à son menu Retropie, choisir le bon réseau, et s’y connecter ; vous pouvez aussi récupérer dans ce menu l’adresse IP via “Show IP”.
        </p>
         <p><span> Où trouver l’adresse IP que je dois rentrer ?</span><br/>
        Vous avez plusieurs possibilités : si vous avez installé Retropie sur le raspberry, vous pouvez aller dans son menu et trouver le “Show IP” ; cela vous indiquera l’adresse IP de votre machine.
        Vous pouvez aussi vous connecter au raspberry en mode console et lancer la commande ifconfig ; cela affichera l’adresse IP (voir à la ligne wlan).
        </p>

        <h2 style="font-size: x-large">Liste de jeux</h2>

        <p> <span>Pourquoi ma liste de jeux est vide ?</span><br/>
    La raison la plus probable est que vous avez entré une adresse IP erronée ; vérifiez si l’adresse correspond bien à celle de votre machine ; sinon, vérifiez que votre raspberry soit bien connectée au réseau.
        </p>   <p><span>Modifier le nom d’un jeu</span><br/>
    Vous pouvez modifier les détails d’un jeu en cliquant sur le bouton en forme de crayon ; cela ouvrira une fenêtre qui vous permettra de personnaliser les informations de votre jeu.
        </p>
 <p><span>Naviguer sur la liste de jeux</span><br/>
        En cliquant sur les en-têtes du tableau, vous pouvez trier ce dernier selon ce sur quoi vous avez cliqué ; cela vous permettra de mieux vous repérer selon ce que vous cherchez.
        </p>
   <p><span>Suppression d’un jeu</span><br/>
        Pour supprimer un jeu, il suffit de cliquer sur l’icône en forme de poubelle associée au jeu que vous voulez supprimer ; un message d’avertissement s'affiche alors, et vous n’avez qu’à confirmer pour supprimer le jeu.
        </p>

        <h3 style="font-size: x-large"> Ajout d’un jeu</h3>

        <p> <span> Le même jeu, mais différent? (localisation PAL/Japon,...)</span><br/>
        Certains jeux sont sortis dans différentes versions en fonction des pays.</p>

        <p> <span>   Bien gérer l’espace restant</span><br/>
        N’oubliez pas que les jeux n’ont pas la même taille; ainsi, un jeu NES sera beaucoup plus léger qu’un jeu N64 ; de ce fait, réfléchissez bien aux jeux que vous souhaitez prendre si vous n’avez plus beaucoup de places sur votre machine.
        </p>

    </div>
</template>


<script>
</script>

<style>

html {
    margin-top:100px;
     text-align: center;
}
    p{

    }
    span{
        font-size: large;
    }
</style>