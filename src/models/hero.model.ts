import { Attribute } from "./attribute.model";
import { heroType } from "../ts/types/hero.type";
import { subHeroType } from "../ts/types/hero.type";
import { Product } from "./product.model";
// import { IHero } from "../ts/interfaces/hero.interfaces";

export class Hero {
    idUser: string;
    // idHero: string;
    type: heroType;
    subtype: subHeroType;
    attributes: { [key: string]: Attribute };
    products: Product[];

    constructor(
        idUser: string,
       // idHero: string,
        type: heroType,
        subtype: subHeroType,
        attributesArray: Attribute[],
        products: Product[]
    ) {
        // this.idHero = idHero;
        this.idUser = idUser;
        this.type = type;
        this.subtype = subtype;
        this.attributes = this.createAttributesMap(
            attributesArray.map((attr) => attr.clone())
        );
        this.products = products;
    }

    private createAttributesMap(attributes: Attribute[]): {
        [key: string]: Attribute;
    } {
        return attributes.reduce((map, attr) => {
            map[attr.name] = attr;
            return map;
        }, {} as { [key: string]: Attribute });
    }
}
