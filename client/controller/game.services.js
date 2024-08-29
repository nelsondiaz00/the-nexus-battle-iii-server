import { GameClient } from "./client-socket.js";
import { MatchView } from "./render.services.js";
const gameClient = new GameClient(
    "http://localhost:3000",
    "../../src/database/input1.json",
);

// gameClient.useAttack({ perpetratorId: "user123", victimId: "GIAN BOBI" });
gameClient.newUser$.subscribe((matchInfo) => {
    console.log("New User Info:", matchInfo);
    updateMatch(matchInfo);
});

gameClient.turnInfo$.subscribe((turnInfo) => {
    console.log("Turn Info:", turnInfo);
    localStorage.setItem("idUserTurn", turnInfo.idUser);
    localStorage.setItem("sideTeam", turnInfo.side);
    gameClient.getMatch();
    // updateTurnInfo(turnInfo);
});

gameClient.actualMatch$.subscribe((actualMatch) => {
    // console.log("update match:", actualMatch);
    updateMatch(actualMatch);
});

gameClient.productUsed$.subscribe((productUsed) => {
    console.log("Product Used:", productUsed);
    updateMatch(productUsed);
});

gameClient.attackUsed$.subscribe((attackInfo) => {
    console.log("Product Used:", attackInfo);
    updateMatch(attackInfo);
});

function clearPreviousRender() {
    const team1 = document.getElementById("team1");
    const team2 = document.getElementById("team2");

    // Clear all child elements of team1 and team2
    while (team1.firstChild) {
        team1.removeChild(team1.firstChild);
    }
    while (team2.firstChild) {
        team2.removeChild(team2.firstChild);
    }
}
function updateMatch(matchInfo) {
    // Clear the previously rendered elements
    clearPreviousRender();

    // Create a new MatchView instance and set up teams
    const matchView = new MatchView(matchInfo, gameClient);
    matchView.setupTeams();
}

// function updateTurnInfo(turnInfo) {
//     // Lógica para mostrar la información actual del turno
// }
