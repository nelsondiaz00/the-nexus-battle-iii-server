import { teamSide } from "../types/team.type";
import { IHero } from "./hero.interfaces";

export interface ITeam {
    players: IHero[];
    name: teamSide;
    alive: boolean;
}
