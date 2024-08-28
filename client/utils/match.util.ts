import { Match } from "../models/match.model";
import { IMatch } from "../ts/interfaces/match.interfaces";
import { ITeam } from "../ts/interfaces/team.interface";
import { teamSide } from "../ts/types/team.type";
import { TeamService } from "./team.util";
export class MatchService {
    static createMatchFromJSON(json: IMatch): Match {
        const createMatch = (matchJson: IMatch) => {
            const teamsMap = new Map<teamSide, ITeam>();

            Array.from(matchJson.teams.values()).forEach((team: ITeam) => {
                teamsMap.set(
                    team.teamSide,
                    TeamService.createTeamFromJSON(team),
                );
            });

            return new Match(matchJson.idMatch, teamsMap);
        };

        return createMatch(json);
    }
}
