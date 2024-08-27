import { Attribute } from "../models/attribute.model";
import { Effect } from "../models/effect.model";
import { Product } from "../models/product.model";
import { Hero } from "../models/hero.model";
export class HeroService {
    static createHeroFromJSON(json) {
        const attributesArray = Object.keys(json.attributes).map((key) => {
            const attr = json.attributes[key];
            return new Attribute(attr._name, attr._value, attr.valueMin, attr.valueMax);
        });
        const effects = json.products.flatMap((product) => product.effects.map((effect) => {
            return new Effect(new Attribute(effect.attribute._name, effect.attribute._value, effect.attribute.valueMin, effect.attribute.valueMax), effect.mathOperator, effect.turns, effect.target, effect.value);
        }));
        const products = json.products.map((product) => {
            const productAttributeNames = product.effects.map((e) => e.attribute._name);
            const productEffects = effects.filter((effect) => productAttributeNames.includes(effect.attribute.name));
            return new Product(product.productName, product.productDescription, product.productType, product.heroType, product.subHeroType, product.dropChance, productEffects, [], product.imagePath);
        });
        return new Hero(json.idUser, json.type, json.subtype, attributesArray, products);
    }
}
