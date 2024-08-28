export class Match {
    teams;
    referee;
    size;
    constructor(teams, referee) {
        this.teams = teams;
        this.referee = referee;
        this.size = teams.size;
    }
    // simulacion de juego
    startGame() {
        console.log("Bienvenindos a The Nexus Battle III");
        this.setTurns();
        // while (this.size > 1) {
        // }
    }
    setTurns() {
        this.teams.forEach((team) => {
            for (let i = team.players.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [team.players[i], team.players[j]] = [
                    team.players[j],
                    team.players[i],
                ];
            }
        });
    }
}
