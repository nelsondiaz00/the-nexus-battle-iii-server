import { evaluate } from "mathjs";
export class Product {
    productName;
    productDescription;
    productType;
    heroType;
    subHeroType;
    dropChance;
    effects;
    conditions;
    imagePath;
    constructor(productName, productDescription, productType, heroType, subHeroType, dropChance, effects, conditions, imagePath) {
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
    useProduct(target) {
        const attributesCopy = { ...target.attributes };
        this.effects.forEach((effect) => {
            const attributeCopy = attributesCopy[effect.attribute.name];
            if (attributeCopy) {
                const ecuation = attributeCopy.value + effect.mathOperator + effect.value;
                attributeCopy.value = evaluate(ecuation);
                effect.accumulateValue();
            }
            else {
                console.warn("Atributo no encontrado!", effect.attribute.name);
            }
        });
        return attributesCopy;
    }
}
