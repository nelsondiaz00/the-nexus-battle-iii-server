import { Hero } from "../models/hero";
import { Team } from "../models/team";

export class Referee {
    players: Hero[];
    teams: Team[];

    constructor(players: Hero[]) {
        this.players = players;
    }

    startGame() {
        this.setTurns();
    }

    setTurns(): void {
        for (let i = this.players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.players[i], this.players[j]] = [
                this.players[j],
                this.players[i],
            ];
        }
    }
    setTeams(): void{
        const mid = Math.floor(this.players.length / 2);
        this.teams[0] = this.players.slice(0, mid);
        this.teams[1] = this.players.slice(mid);
        console.log("Lista final:", this.players);
    }
}
