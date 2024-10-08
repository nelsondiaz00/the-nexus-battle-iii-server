import { evaluate } from "mathjs";
import { productType } from "../ts/types/product.type";
import { heroType } from "../ts/types/hero.type";
import { subHeroType } from "../ts/types/hero.type";
import { IProduct } from "../ts/interfaces/product.interfaces";
import { IEffect } from "../ts/interfaces/effect.interfaces";
import { ICondition } from "../ts/interfaces/condition.interface";
import { IHero } from "../ts/interfaces/hero.interfaces";
import { IAttribute } from "../ts/interfaces/attribute.interfaces";

export class Product implements IProduct {
    public productName: string;
    public productDescription: string;
    public productType: productType;
    public heroType: heroType;
    public subHeroType: subHeroType;
    public dropChance: string;
    public effects: IEffect[];
    public conditions: ICondition[];
    public imagePath: string;

    constructor(
        productName: string,
        productDescription: string,
        productType: productType,
        heroType: heroType,
        subHeroType: subHeroType,
        dropChance: string,
        effects: IEffect[],
        conditions: ICondition[],
        imagePath: string,
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

    useProduct(target: IHero): { [key: string]: IAttribute } {
        const attributesCopy = { ...target.attributes };

        this.effects.forEach((effect: IEffect) => {
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
