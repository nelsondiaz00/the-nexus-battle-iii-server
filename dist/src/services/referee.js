// import { Team } from "../models/team.model";
export class Referee {
    players;
    // teams: Team[];
    constructor(players) {
        this.players = players;
    }
    startGame() {
        this.setTurns();
    }
    setTurns() {
        for (let i = this.players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.players[i], this.players[j]] = [
                this.players[j],
                this.players[i],
            ];
        }
    }
}
