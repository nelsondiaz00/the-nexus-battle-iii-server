import { Match } from "../models/match.model";
import { Team } from "../models/team.model";
import { IHero } from "../ts/interfaces/hero.interfaces";
import { IMatch } from "../ts/interfaces/match.interfaces";
import { ITeam } from "../ts/interfaces/team.interface";
import { HeroService } from "./hero.service";

export class TeamService {
    static createMatchFromJSON(json: IMatch): Match {
        const createPlayers = (playersJson: IHero[]) =>
            playersJson.map((player: IHero) => {
                return HeroService.createHeroFromJSON(player);
            });

        // createTeams = (teamsJson: ITeam) =>
        //     Object.keys(teamsJson).map((key) => {
        //         const team = teamsJson[key];
        //         return new Team(HeroService.createHeroFromJSON(team.players), , team.alive);
        // });
    }
}
