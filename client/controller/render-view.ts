import { IMatch } from "../ts/interfaces/match.interfaces";
import { MatchService } from "../utils/match.util";

export class Render{

    static renderMatch(json: IMatch){
        
        MatchService.createMatchFromJSON(json);
        

    }

}

