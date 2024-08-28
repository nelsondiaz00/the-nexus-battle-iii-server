import { Team } from "./team.model";
import { teamSide } from "../ts/types/team.type";

export class Match {
    idMatch: string;
    teams: Map<teamSide, Team>;
    size: number;

    constructor(idMatch: string, teams: Map<teamSide, Team>) {
        this.teams = teams;
        this.idMatch = idMatch;
        this.size = teams.size;
    }
    // simulacion de juego
    startGame() {
        console.log("Bienvenindos a The Nexus Battle III");
        this.setTurns();

        // while (this.size > 1) {

        // }
    }

    setTurns(): void {
        this.teams.forEach((team: Team) => {
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
