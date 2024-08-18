import { Attribute } from "./attribute";
import { Config } from "../../config/config";
import { Product } from "./product";

export class Hero {
    type: string;
    subtype: string;
    attributes: { [key: string]: Attribute };
    products: Product[];

    constructor(
        type: keyof typeof Config.HeroType,
        subtype: keyof typeof Config.HeroSubType,
        attributesArray: Attribute[],
        products: Product[]
    ) {
        this.type = Config.HeroType[type];
        this.subtype = Config.HeroSubType[subtype];
        this.attributes = this.createAttributesMap(attributesArray);
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
