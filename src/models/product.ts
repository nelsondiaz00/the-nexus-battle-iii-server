import { Effect } from "./effect";
import { Condition } from "./condition";
import { Config } from "../../config/config";
import { Hero } from "./hero";
import { Attribute } from "./attribute";
import { evaluate } from "mathjs";
//import { Attribute } from "./attribute";

export class Product {
    productName: string;
    productDescription: string;
    productType: string;
    heroType: string;
    heroSubType: string;
    dropChance: string;
    effects: Effect[];
    conditions: Condition[] | null;

    constructor(
        productName: string,
        productDescription: string,
        productType: keyof typeof Config.ProductType,
        heroType: keyof typeof Config.HeroType,
        heroSubType: keyof typeof Config.HeroSubType,
        dropChance: string,
        effects: Effect[],
        conditions: Condition[] | null
    ) {
        this.productType = Config.ProductType[productType];
        this.heroType = Config.HeroType[heroType];
        this.heroSubType = Config.HeroSubType[heroSubType];
        this.productName = productName;
        this.productDescription = productDescription;
        this.dropChance = dropChance;
        this.effects = effects;
        this.conditions = conditions;
    }

    useProduct(target: Hero): { [key: string]: Attribute } {
        const attributesCopy = { ...target.attributes };

        this.effects.forEach((effect: Effect) => {
            const attributeCopy =
                attributesCopy[effect.attributeName.toLowerCase()];

            if (attributeCopy) {
                const ecuation =
                    attributeCopy.value + effect.operator + effect.value;
                attributeCopy.value = evaluate(ecuation);
                effect.accumulateValue();
                
            } else {
                console.warn(
                    "Atributo no encontrado!",
                    effect.attributeName.toLocaleLowerCase()
                );
            }
        });

        return attributesCopy;
    }
}
