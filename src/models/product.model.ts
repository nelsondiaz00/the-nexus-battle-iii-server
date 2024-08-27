import { Effect } from "./effect.model";
import { Condition } from "./condition.model";
import { Hero } from "./hero.model";
import { Attribute } from "./attribute.model";
import { evaluate } from "mathjs";
import { productType } from "../ts/types/product.type";
import { heroType } from "../ts/types/hero.type";
import { subHeroType } from "../ts/types/hero.type";

export class Product {
    productName: string;
    productDescription: string;
    productType: productType;
    heroType: heroType;
    subHeroType: subHeroType;
    dropChance: string;
    effects: Effect[];
    conditions: Condition[];
    imagePath: string;

    constructor(
        productName: string,
        productDescription: string,
        productType: productType,
        heroType: heroType,
        subHeroType: subHeroType,
        dropChance: string,
        effects: Effect[],
        conditions: Condition[],
        imagePath: string
    ) {
        this.productType = productType;
        this.heroType = heroType;
        this.subHeroType = subHeroType;
        this.productName = productName;
        this.productDescription = productDescription;
        this.dropChance = dropChance;
        this.effects = effects;
        this.conditions = conditions;
        this.imagePath = imagePath;
    }

    useProduct(target: Hero): { [key: string]: Attribute } {
        const attributesCopy = { ...target.attributes };

        this.effects.forEach((effect: Effect) => {
            const attributeCopy = attributesCopy[effect.attribute.name];

            if (attributeCopy) {
                const ecuation =
                    attributeCopy.value + effect.mathOperator + effect.value;
                attributeCopy.value = evaluate(ecuation);
                effect.accumulateValue();
            } else {
                console.warn("Atributo no encontrado!", effect.attribute.name);
            }
        });

        return attributesCopy;
    }
}
