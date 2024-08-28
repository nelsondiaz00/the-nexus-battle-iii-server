import { Match } from "../models/match.model";
import { IMatch } from "../ts/interfaces/match.interfaces";
import { HeroService } from "./hero.service";
export class MatchService {
    

    static createMatchFromJSON(json: IMatch): Match{
        const idMatch = json.idMatch;

        const teams = Object.keys(json.teams).map((key) =>{


        })
        
        return null;
    }
}