import { Team } from "./team.model";
import { Referee } from "../services/referee";
import { Config } from "../../config/config";

export class Match {
    teams: Map<string, Team>;
    referee: Referee;
    size: number;

    constructor(
        teams: Map<keyof typeof Config.SideTeam, Team>,
        referee: Referee
    ) {
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
