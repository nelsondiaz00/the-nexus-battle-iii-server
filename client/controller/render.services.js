export class MatchView {
    constructor(jsonData, gameClient) {
        this.jsonData = jsonData;
        this.players = [
            ...jsonData.teams.blue.players,
            ...jsonData.teams.red.players,
        ];
        this.players_number = this.players.length;
        this.team1 = document.getElementById("team1");
        this.team2 = document.getElementById("team2");
        this.turnInfoElement = document.getElementById("turnInfo"); // Element for turn info
        this.gameClient = gameClient;
        this.createStartBattleButton();
        this.updateTurnInfo(localStorage.getItem("idUserTurn"));
        this.startCounter();
        // localStorage.setItem("idUser", "user9");
    }

    checkGameOver() {
        const isTeamAlive = (team) => team.some((player) => player.alive);

        const blueTeamPlayers = this.players.filter(
            (player) => player.teamSide === "blue",
        );
        const redTeamPlayers = this.players.filter(
            (player) => player.teamSide === "red",
        );

        const blueTeamAlive = isTeamAlive(blueTeamPlayers);
        const redTeamAlive = isTeamAlive(redTeamPlayers);

        if (!blueTeamAlive || !redTeamAlive) {
            const message = !blueTeamAlive
                ? "El equipo azul ha sido eliminado. La partida ha finalizado."
                : "El equipo rojo ha sido eliminado. La partida ha finalizado.";
            this.showGameOverModal(message);
        }
    }

    showGameOverModal(message) {
        const modal = document.getElementById("gameOverModal");
        const messageElement = document.getElementById("gameOverMessage");
        const closeModalButton = document.getElementById("closeModal");

        messageElement.textContent = message;
        modal.style.display = "block";

        // Bloquear habilidades, ítems y ataques
        this.disableAllInteractions();

        // Cerrar modal al hacer clic en la "x"
        closeModalButton.onclick = function () {
            modal.style.display = "none";
        };
    }

    disableAllInteractions() {
        // Deshabilita habilidades
        const habElements = document.querySelectorAll(".img-hab");
        habElements.forEach((element) => {
            element.classList.add("disabled");
        });

        // Deshabilita ítems
        const itemElements = document.querySelectorAll(".img-item");
        itemElements.forEach((element) => {
            element.classList.add("disabled");
        });

        // Deshabilita ataques
        const playerElements = document.querySelectorAll(".player-opposing");
        playerElements.forEach((element) => {
            element.classList.add("disabled");
        });
    }

    createStartBattleButton() {
        const startBattleButton = document.getElementById("startBattleButton");

        if (startBattleButton) {
            startBattleButton.addEventListener("click", () => {
                this.gameClient.startBattle();
                startBattleButton.style.display = "none"; // Hide the button after clicking
            });
        } else {
            console.error("Start battle button not found in the HTML.");
        }
    }

    startCounter() {
        let counterValue = 0; // Valor inicial del contador
        const counterElement = document.getElementById("counter");

        if (!counterElement) {
            console.error(
                "No se encontró el elemento del contador en el HTML.",
            );
            return;
        }

        setInterval(() => {
            const formattedValue = counterValue.toString().padStart(2, "0");
            counterElement.textContent = `0:${formattedValue}`;

            counterValue = (counterValue + 1) % 31;
        }, 1000);
    }

    chargePlayers() {
        let h;
        if (this.players_number <= 2) {
            h = document.getElementsByClassName("player");
        } else {
            h = document.getElementsByClassName("player-sub-team");
        }

        const storedIdUser = localStorage.getItem("idUser");
        const idUserTurn = localStorage.getItem("idUserTurn");
        const sideTeam = localStorage.getItem("sideTeam");

        if (!storedIdUser || !idUserTurn || !sideTeam) {
            console.error(
                "Datos de usuario o turno no encontrados en localStorage",
            );
            return;
        }

        const currentUser = this.players.find(
            (player) => player.idUser === storedIdUser,
        );
        if (!currentUser) {
            console.error("Usuario no encontrado en el arreglo de jugadores");
            return;
        }

        const currentTeamSide = currentUser.teamSide;

        for (let i = 0; i < this.players.length; i++) {
            let img_player = document.createElement("img");
            let barra_vida = document.createElement("div");
            let vida_relleno = document.createElement("div");
            let name_player = document.createElement("p");
            let player = this.players[i];

            barra_vida.classList.add("barra");
            vida_relleno.classList.add("vida-relleno");
            img_player.classList.add("img-player");
            name_player.classList.add("name-player");
            console.log("playerrr: " + player);
            if (player.idUser) {
                name_player.textContent =
                    player.idUser === storedIdUser
                        ? `${player.idUser} (you)`
                        : player.idUser;
            } else {
                console.log(
                    `No se encontró idUser para el jugador en el índice ${i}`,
                );
            }

            img_player.src =
                "./assets/heroes/" +
                player.subtype +
                "." +
                player.type +
                ".png";

            const maxHealth = player.attributes.health.value;
            const currentHealth = player.attributes.blood.value;
            const healthPercentage = (currentHealth / maxHealth) * 100;
            vida_relleno.style.width = `${healthPercentage}%`;
            barra_vida.appendChild(vida_relleno);

            if (player.teamSide !== currentTeamSide) {
                h[i].classList.add("player-opposing");
                h[i].classList.remove("player-allied");
                h[i].addEventListener("click", () => {
                    console.log(`Jugador clicado: ${player.idUser}`);
                    if (storedIdUser === idUserTurn) {
                        this.gameClient.useAttack({
                            perpetratorId: storedIdUser,
                            victimId: player.idUser,
                        });
                    } else {
                        console.log("No es tu turno para atacar.");
                    }
                });
            } else {
                h[i].classList.add("player-allied");
                h[i].classList.remove("player-opposing");
                h[i].removeEventListener("click", () => {}); // Asegura que no se pueda hacer clic
            }

            h[i].appendChild(barra_vida);
            h[i].appendChild(img_player);
            h[i].appendChild(name_player);
        }
        this.chargeHabs();
        this.chargeItems();
    }

    chargeHabs() {
        const storedIdUser = localStorage.getItem("idUser");
        const idUserTurn = localStorage.getItem("idUserTurn");
        const sideTeam = localStorage.getItem("sideTeam");

        if (!storedIdUser || !idUserTurn || !sideTeam) {
            console.error(
                "Datos de usuario o turno no encontrados en localStorage",
            );
            return;
        }

        const user = this.players.find(
            (player) => player.idUser === storedIdUser,
        );

        if (!user) {
            console.error("Usuario no encontrado en el arreglo de jugadores");
            return;
        }

        const userProducts = user.products.filter(
            (product) => product.productType === "hability",
        );

        let hab = document.querySelectorAll(".hab");

        hab.forEach((element) => {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        });

        for (let i = 0; i < userProducts.length; i++) {
            let img_hab = document.createElement("img");

            img_hab.src = "./assets/spells/" + userProducts[i].imagePath;
            img_hab.classList.add("img-hab");

            if (storedIdUser !== idUserTurn || user.teamSide !== sideTeam) {
                img_hab.classList.add("disabled");
            } else {
                img_hab.addEventListener("click", () => {
                    const productInfo = {
                        target: user.idUser,
                        product: userProducts[i].idProduct,
                    };

                    this.gameClient.useProduct(productInfo);
                });
            }

            hab[i].appendChild(img_hab);
        }
    }

    chargeItems() {
        const storedIdUser = localStorage.getItem("idUser");
        const idUserTurn = localStorage.getItem("idUserTurn");
        const sideTeam = localStorage.getItem("sideTeam");

        if (!storedIdUser || !idUserTurn || !sideTeam) {
            console.error(
                "Datos de usuario o turno no encontrados en localStorage",
            );
            return;
        }

        const user = this.players.find(
            (player) => player.idUser === storedIdUser,
        );

        if (!user) {
            console.error("Usuario no encontrado en el arreglo de jugadores");
            return;
        }

        const userItems = user.products.filter(
            (product) => product.productType === "item",
        );

        let itemsContainer = document.querySelector(".items");

        if (!itemsContainer) {
            console.error("El contenedor de ítems no se encontró en el DOM.");
            return;
        }

        while (itemsContainer.firstChild) {
            itemsContainer.removeChild(itemsContainer.firstChild);
        }

        for (let i = 0; i < userItems.length; i++) {
            let itemDiv = document.createElement("div");
            let img_item = document.createElement("img");

            img_item.src = "./assets/spells/" + userItems[i].imagePath;
            img_item.classList.add("img-item");

            if (storedIdUser !== idUserTurn || user.teamSide !== sideTeam) {
                img_item.classList.add("disabled");
            } else {
                img_item.addEventListener("click", () => {
                    const productInfo = {
                        target: user.idUser,
                        product: userItems[i].idProduct,
                    };

                    this.gameClient.useProduct(productInfo);
                });
            }

            itemDiv.classList.add("item");
            itemDiv.appendChild(img_item);
            itemsContainer.appendChild(itemDiv);
        }
    }

    setupTeams() {
        if (this.players_number <= 2) {
            for (let i = 0; i < this.players_number / 2; i++) {
                let player = document.createElement("div");
                player.classList.add("player");
                this.team1.appendChild(player);
            }

            for (let i = 0; i < this.players_number / 2; i++) {
                let player = document.createElement("div");
                player.classList.add("player");
                this.team2.appendChild(player);
            }

            this.chargePlayers();
            this.checkGameOver();
        } else {
            this.team1.className = "more-players";
            this.team2.className = "more-players";

            for (let i = 0; i < 2; i++) {
                let sub_team1 = document.createElement("div");
                let sub_team2 = document.createElement("div");

                sub_team1.classList.add("sub-team");
                sub_team2.classList.add("sub-team");

                for (let j = 0; j < this.players_number / 2; j++) {
                    let player = document.createElement("div");
                    player.classList.add("player-sub-team");
                    sub_team1.appendChild(player);
                }

                for (let j = 0; j < this.players_number / 2; j++) {
                    let player = document.createElement("div");
                    player.classList.add("player-sub-team");
                    sub_team2.appendChild(player);
                }

                this.team1.appendChild(sub_team1);
                this.team2.appendChild(sub_team2);
            }

            this.chargePlayers();
            this.checkGameOver();
        }
    }

    updateTurnInfo(currentTurnId) {
        const player = this.players.find((p) => p.idUser === currentTurnId);
        if (player) {
            this.turnInfoElement.textContent = `¡Es el turno ${player.idUser}!`;
        } else {
            this.turnInfoElement.textContent =
                "Oprime <Start Battle> para comenzar batalla";
        }
    }
}
