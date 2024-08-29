import { Product } from "../../models/product.model";
import { heroType, subHeroType } from "../types/hero.type";
import { IAttribute } from "./attribute.interfaces";

export interface IHero {
    idUser: string;
    // idHero: string;
    type: heroType;
    subtype: subHeroType;
    attributes: { [key: string]: IAttribute };
    products: Product[];
    alive: boolean;
}
