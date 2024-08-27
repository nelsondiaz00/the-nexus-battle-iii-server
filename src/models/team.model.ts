import { Hero } from "./hero.model";
import { teamSide } from "../ts/types/team.type";
export class Team {
    players: Hero[];
    name: teamSide;
    alive: boolean;

    constructor(players: Hero[], name: teamSide, alive: boolean) {
        this.players = players;
        this.name = name;
        this.alive = alive;
    }
}
