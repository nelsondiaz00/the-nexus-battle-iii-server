import { Attribute } from "./attribute.model";
import { heroType } from "../ts/types/hero.type";
import { subHeroType } from "../ts/types/hero.type";
import { Product } from "./product.model";
import { IHero } from "../ts/interfaces/hero.interfaces";

export class Hero implements IHero {
    type: heroType;
    subtype: subHeroType;
    attributes: { [key: string]: Attribute };
    products: Product[];

    constructor(
        type: heroType,
        subtype: subHeroType,
        attributesArray: Attribute[],
        products: Product[]
    ) {
        this.type = type;
        this.subtype = subtype;
        this.attributes = this.createAttributesMap(
            attributesArray.map(attr => attr.clone())
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
