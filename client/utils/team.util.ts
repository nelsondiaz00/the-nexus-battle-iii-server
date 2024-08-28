import { Team } from "../models/team.model";
import { IHero } from "../ts/interfaces/hero.interfaces";
import { ITeam } from "../ts/interfaces/team.interface";
import { HeroService } from "./hero.util";

export class TeamService {
    static createTeamFromJSON(json: ITeam): Team {
        const createPlayers = (playersJson: IHero[]) =>
            playersJson.map((player: IHero) => {
                return HeroService.createHeroFromJSON(player);
            });
        const players = createPlayers(json.players);

        return new Team(players, json.teamSide, json.alive);
    }
}
