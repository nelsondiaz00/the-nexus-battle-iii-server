let players_number = 2;
let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');

/* Si en cada equipo hay menos de dos jugadores pasará esto*/ 
if (players_number <= 2) {

    /* Crea los elementos y los agrega a cada equipo */ 

    for (let i = 0; i < players_number; i++) {
        let player = document.createElement('div');
        player.classList.add('player');
        team1.appendChild(player);
    }

    for (let i = 0; i < players_number; i++) {
        let player = document.createElement('div');
        player.classList.add('player');
        team2.appendChild(player);
    }

    /* Obtiene una lista de elementos que tenga la clase
    y les carga su respectiva imagen, se agregará la barra de vida
    y el nombre */

    let h = document.getElementsByClassName('player');

    for (let i = 0; i < h.length; i++) {
        let img_player = document.createElement('img');
        let barra_vida = document.createElement('div');
        let name_player = document.createElement('p');
        barra_vida.classList.add('barra');
        img_player.classList.add('img-player');
        name_player.classList.add('name-player');
        name_player.textContent = 'Juan';
        img_player.src = './assets/Component1.png';
        h[i].appendChild(barra_vida);
        h[i].appendChild(img_player);
        h[i].appendChild(name_player);

    }


} else {
    team1.className = 'more-players';
    team2.className = 'more-players';

    for (let i = 0; i < 2; i++) {
        let sub_team1 = document.createElement('div');
        let sub_team2 = document.createElement('div');

        sub_team1.classList.add('sub-team');
        sub_team2.classList.add('sub-team');

        team1.appendChild(sub_team1);
        team2.appendChild(sub_team2);
    }

    for (let i = 0; i < players_number; i++) {
        let player = document.createElement('div');
        player.className = 'player-sub-team';
        if (i < 2) {
            team1.children[0].appendChild(player);
        } else {
            team1.children[1].appendChild(player);
        }

    }

    for (let i = 0; i < players_number; i++) {
        let player = document.createElement('div');
        player.className = 'player-sub-team';
        if (i < 2) {
            team2.children[1].appendChild(player);

        } else {
            team2.children[0].appendChild(player);
        }

    }

    let h = document.getElementsByClassName('player-sub-team');

    for (let i = 0; i < h.length; i++) {
        let img_player = document.createElement('img');
        let barra_vida = document.createElement('div');
        let name_player = document.createElement('p');
        barra_vida.classList.add('barra');
        img_player.classList.add('img-player');
        name_player.classList.add('name-player');
        name_player.textContent = 'Juan';
        img_player.src = './assets/Component1.png';
        h[i].appendChild(barra_vida);
        h[i].appendChild(img_player);
        h[i].appendChild(name_player);

    }


}

function chargeHabs(lista) {
    
    let hab = document.querySelectorAll('.hab');
    
    for (let i = 0; i < hab.length; i++) {
        let img_hab = document.createElement('img');
        img_hab.src = '../';
        img_hab.classList('img-hab');
        hab[i].appendChild(img_hab);
    }

}