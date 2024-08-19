import { Hero } from "./hero";

export class Team {
    players: Hero[];
    name: string;
    alive: boolean;

    constructor(players: Hero[], name: string, alive: boolean) {
        this.players = players;
        this.name = name;
        this.alive = alive;
    }
}
