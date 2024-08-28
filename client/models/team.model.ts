import { teamSide } from "../ts/types/team.type";
import { ITeam } from "../ts/interfaces/team.interface";
import { IHero } from "../ts/interfaces/hero.interfaces";
export class Team implements ITeam {
    public players: IHero[];
    public teamSide: teamSide;
    public alive: boolean;

    constructor(players: IHero[], teamSide: teamSide, alive: boolean) {
        this.players = players;
        this.teamSide = teamSide;
        this.alive = alive;
    }
}
