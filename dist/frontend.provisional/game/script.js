"use strict";
const players_number = 1;
const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
const player_lol = [
    {
        nombre: "Juan",
        img: "./assets/Component1.png",
        vida: 100,
    },
    {
        nombre: "Gian",
        img: "./assets/Component2.png",
        vida: 100,
    },
];
const habilit = [
    {
        dano: 10,
        img: "./assets/pocion2.png",
    },
    {
        dano: 50,
        img: "./assets/pocion.png",
    },
    {
        dano: 20,
        img: "./assets/pocion2.png",
    },
    {
        dano: 30,
        img: "./assets/pocion.png",
    },
];
if (players_number <= 2) {
    if (team1 && team2) {
        // Create elements and add them to each team
        for (let i = 0; i < players_number; i++) {
            const player = document.createElement("div");
            player.classList.add("player");
            team1.appendChild(player);
        }
        for (let i = 0; i < players_number; i++) {
            const player = document.createElement("div");
            player.classList.add("player");
            team2.appendChild(player);
        }
        // Load players' images, life bars, and names
        chargePlayers();
    }
}
else {
    if (team1 && team2) {
        team1.className = "more-players";
        team2.className = "more-players";
        for (let i = 0; i < 2; i++) {
            const sub_team1 = document.createElement("div");
            const sub_team2 = document.createElement("div");
            sub_team1.classList.add("sub-team");
            sub_team2.classList.add("sub-team");
            team1.appendChild(sub_team1);
            team2.appendChild(sub_team2);
        }
        for (let i = 0; i < players_number; i++) {
            const player = document.createElement("div");
            player.className = "player-sub-team";
            if (i < 2) {
                team1.children[0].appendChild(player);
            }
            else {
                team1.children[1].appendChild(player);
            }
        }
        for (let i = 0; i < players_number; i++) {
            const player = document.createElement("div");
            player.className = "player-sub-team";
            if (i < 2) {
                team2.children[1].appendChild(player);
            }
            else {
                team2.children[0].appendChild(player);
            }
        }
        chargePlayers();
    }
}
function chargePlayers() {
    console.log("Charge players");
    let h;
    if (players_number <= 2) {
        h = document.getElementsByClassName("player");
    }
    else {
        h = document.getElementsByClassName("player-sub-team");
    }
    for (let i = 0; i < h.length; i++) {
        const img_player = document.createElement("img");
        const barra_vida = document.createElement("div");
        const name_player = document.createElement("p");
        barra_vida.classList.add("barra");
        img_player.classList.add("img-player");
        name_player.classList.add("name-player");
        name_player.textContent = player_lol[i].nombre;
        img_player.src = player_lol[i].img;
        h[i].appendChild(barra_vida);
        h[i].appendChild(img_player);
        h[i].appendChild(name_player);
    }
    chargeHabs();
}
function chargeHabs() {
    const hab = document.querySelectorAll(".hab");
    console.log(hab);
    for (let i = 0; i < hab.length; i++) {
        const img_hab = document.createElement("img");
        img_hab.src = habilit[i].img;
        img_hab.classList.add("img-hab");
        hab[i].appendChild(img_hab);
    }
}
/*

let countdown: NodeJS.Timeout;
const timerDisplay: HTMLElement | null = document.getElementById('timer');
const initialTime: number = 90; // 1:30 in seconds

function startTimer(seconds: number): void {
    const now: number = Date.now();
    const then: number = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft: number = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            startTimer(initialTime); // Restart timer
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds: number): void {
    const minutes: number = Math.floor(seconds / 60);
    const remainderSeconds: number = seconds % 60;
    const display: string = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    if (timerDisplay) {
        timerDisplay.textContent = display;
    }
}

// Start the timer for the first time
startTimer(initialTime);
*/
