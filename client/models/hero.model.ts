import { Attribute } from "./attribute.model";
import { heroType } from "../ts/types/hero.type";
import { subHeroType } from "../ts/types/hero.type";
import { IHero } from "../ts/interfaces/hero.interfaces";
import { IAttribute } from "../ts/interfaces/attribute.interfaces";
import { IProduct } from "../ts/interfaces/product.interfaces";
// import { IHero } from "../ts/interfaces/hero.interfaces";

export class Hero implements IHero {
    public idUser: string;
    // idHero: string;
    public type: heroType;
    public subtype: subHeroType;
    public attributes: { [key: string]: IAttribute };
    public products: IProduct[];
    public alive: boolean;

    constructor(
        idUser: string,
        // idHero: string,
        type: heroType,
        subtype: subHeroType,
        attributesArray: IAttribute[],
        products: IProduct[],
    ) {
        // this.idHero = idHero;
        this.idUser = idUser;
        this.type = type;
        this.subtype = subtype;
        this.attributes = this.createAttributesMap(
            attributesArray.map((attr) => attr.clone()),
        );
        this.products = products;
        this.alive = true;
    }

    private createAttributesMap(attributes: IAttribute[]): {
        [key: string]: Attribute;
    } {
        return attributes.reduce(
            (map, attr) => {
                map[attr.name] = attr;
                return map;
            },
            {} as { [key: string]: Attribute },
        );
    }
}
