const jsonData = {
    idMatch: "1",
    teams: {
        blue: {
            players: [
                {
                    idUser: "user123",
                    type: "warrior",
                    subtype: "tank",
                    attributes: {
                        force: {
                            name: "force",
                            value: 50,
                            valueMin: 10,
                            valueMax: 100,
                        },
                        health: {
                            name: "health",
                            value: 200,
                            valueMin: 50,
                            valueMax: 500,
                        },
                        attack: {
                            name: "attack",
                            value: 95,
                            valueMin: 20,
                            valueMax: 150,
                        },
                        damage: {
                            name: "damage",
                            value: 40,
                            valueMin: 5,
                            valueMax: 80,
                        },
                        critical: {
                            name: "critical",
                            value: 10,
                            valueMin: 1,
                            valueMax: 20,
                        },
                        defense: {
                            name: "defense",
                            value: 110,
                            valueMin: 15,
                            valueMax: 120,
                        },
                        level: {
                            name: "level",
                            value: 10,
                            valueMin: 1,
                            valueMax: 50,
                        },
                        experience: {
                            name: "experience",
                            value: 5000,
                            valueMin: 0,
                            valueMax: 10000,
                        },
                        blood: {
                            name: "blood",
                            value: 40,
                            valueMin: 0,
                            valueMax: 0,
                        },
                    },
                    products: [
                        {
                            idProduct: "19",
                            productName: "Magic Sword",
                            productDescription:
                                "A powerful sword with magical properties.",
                            productType: "hability",
                            heroType: "warrior",
                            subHeroType: "tank",
                            dropChance: "10%",
                            effects: [
                                {
                                    attributeName: "defense",
                                    mathOperator: "+",
                                    turns: 0,
                                    target: "ally",
                                    value: 25,
                                    valueCaused: 20,
                                },
                                {
                                    attributeName: "attack",
                                    mathOperator: "+",
                                    turns: 0,
                                    target: "enemy",
                                    value: 10,
                                    valueCaused: 15,
                                },
                            ],
                            imagePath: "magic.sword.png",
                        },
                        {
                            idProduct: "20",
                            productName: "punch",
                            productDescription:
                                "A powerful sword with magical properties.",
                            productType: "hability",
                            heroType: "warrior",
                            subHeroType: "tank",
                            dropChance: "10%",
                            effects: [
                                {
                                    attributeName: "defense",
                                    mathOperator: "+",
                                    turns: 0,
                                    target: "ally",
                                    value: 25,
                                    valueCaused: 20,
                                },
                                {
                                    attributeName: "attack",
                                    mathOperator: "+",
                                    turns: 0,
                                    target: "enemy",
                                    value: 10,
                                    valueCaused: 15,
                                },
                            ],
                            imagePath: "punch.png",
                        },
                    ],
                },
            ],
        },
        red: {
            players: [
                {
                    idUser: "user456",
                    type: "warrior",
                    subtype: "weapon",
                    attributes: {
                        force: {
                            name: "force",
                            value: 50,
                            valueMin: 10,
                            valueMax: 100,
                        },
                        health: {
                            name: "health",
                            value: 200,
                            valueMin: 50,
                            valueMax: 500,
                        },
                        attack: {
                            name: "attack",
                            value: 95,
                            valueMin: 20,
                            valueMax: 150,
                        },
                        damage: {
                            name: "damage",
                            value: 40,
                            valueMin: 5,
                            valueMax: 80,
                        },
                        critical: {
                            name: "critical",
                            value: 10,
                            valueMin: 1,
                            valueMax: 20,
                        },
                        defense: {
                            name: "defense",
                            value: 110,
                            valueMin: 15,
                            valueMax: 120,
                        },
                        level: {
                            name: "level",
                            value: 10,
                            valueMin: 1,
                            valueMax: 50,
                        },
                        experience: {
                            name: "experience",
                            value: 5000,
                            valueMin: 0,
                            valueMax: 10000,
                        },
                        blood: {
                            name: "blood",
                            value: 40,
                            valueMin: 0,
                            valueMax: 0,
                        },
                    },
                    products: [
                        {
                            idProduct: "19",
                            productName: "Magic Sword",
                            productDescription:
                                "A powerful sword with magical properties.",
                            productType: "hability",
                            heroType: "warrior",
                            subHeroType: "tank",
                            dropChance: "10%",
                            effects: [
                                {
                                    attributeName: "defense",
                                    mathOperator: "+",
                                    turns: 0,
                                    target: "ally",
                                    value: 25,
                                    valueCaused: 20,
                                },
                                {
                                    attributeName: "attack",
                                    mathOperator: "+",
                                    turns: 0,
                                    target: "enemy",
                                    value: 10,
                                    valueCaused: 15,
                                },
                            ],
                            imagePath: "./assets/images/magic_sword.png",
                        },
                    ],
                },
            ],
        },
    },
};

// export function initView() {}
localStorage.setItem("idUser", "user123");
// Obtener equipos y jugadores del JSON
let players_number =
    Object.keys(jsonData.teams.blue.players).length +
    Object.keys(jsonData.teams.red.players).length;
let team1 = document.getElementById("team1");
let team2 = document.getElementById("team2");

const players = [...jsonData.teams.blue.players, ...jsonData.teams.red.players];

console.log(players_number + " _ " + players.length);

// Función para cargar jugadores a la interfaz
function chargePlayers() {
    let h;
    if (players_number <= 2) {
        h = document.getElementsByClassName("player");
    } else {
        h = document.getElementsByClassName("player-sub-team");
    }

    console.log(h.length + " players: " + players_number);

    for (let i = 0; i < h.length; i++) {
        let img_player = document.createElement("img");
        let barra_vida = document.createElement("div");
        let name_player = document.createElement("p");
        barra_vida.classList.add("barra");
        img_player.classList.add("img-player");
        name_player.classList.add("name-player");
        name_player.textContent = players[i].idUser;
        img_player.src = players[i].products[0].imagePath;

        img_player.src =
            "./assets/heroes/" +
            players[i].subtype +
            "." +
            players[i].type +
            ".png";

        // console.log(img_player);

        h[i].appendChild(barra_vida);
        h[i].appendChild(img_player);
        h[i].appendChild(name_player);
    }
    chargeHabs();
}

// Función para cargar habilidades a la interfaz
function chargeHabs() {
    console.log("Cargar habilidades");

    // Obtener idUser desde localStorage
    const storedIdUser = localStorage.getItem("idUser");
    if (!storedIdUser) {
        console.error("idUser no encontrado en localStorage");
        return;
    }

    // Filtrar las habilidades del usuario actual
    const user = players.find((player) => player.idUser === storedIdUser);
    if (!user) {
        console.error("Usuario no encontrado en el arreglo de jugadores");
        return;
    }

    // Obtener las habilidades del usuario actual
    const userProducts = user.products;
    console.log(userProducts, " habilidades");

    let hab = document.querySelectorAll(".hab");

    for (let i = 0; i < userProducts.length; i++) {
        let img_hab = document.createElement("img");

        // Solo carga las habilidades del usuario actual
        if (userProducts.length > 0) {
            img_hab.src = "./assets/spells/" + userProducts[i].imagePath;
            img_hab.classList.add("img-hab");

            console.log(img_hab); // Verifica en la consola la ruta asignada
            hab[i].appendChild(img_hab);
        }
    }
}

// Creación de elementos y lógica para adaptar los jugadores
if (players_number <= 2) {
    for (let i = 0; i < players_number / 2; i++) {
        let player = document.createElement("div");
        player.classList.add("player");
        team1.appendChild(player);
    }

    for (let i = 0; i < players_number / 2; i++) {
        let player = document.createElement("div");
        player.classList.add("player");
        team2.appendChild(player);
    }

    chargePlayers();
} else {
    team1.className = "more-players";
    team2.className = "more-players";

    for (let i = 0; i < 2; i++) {
        let sub_team1 = document.createElement("div");
        let sub_team2 = document.createElement("div");

        sub_team1.classList.add("sub-team");
        sub_team2.classList.add("sub-team");

        team1.appendChild(sub_team1);
        team2.appendChild(sub_team2);
    }

    for (let i = 0; i < players_number / 2; i++) {
        let player = document.createElement("div");
        player.className = "player-sub-team";
        if (i < 2) {
            team1.children[0].appendChild(player);
        } else {
            team1.children[1].appendChild(player);
        }
    }

    for (let i = 0; i < players_number / 2; i++) {
        let player = document.createElement("div");
        player.className = "player-sub-team";
        if (i < 2) {
            team2.children[1].appendChild(player);
        } else {
            team2.children[0].appendChild(player);
        }
    }
    chargePlayers();
}
