import { IHero } from "../ts/interfaces/hero.interfaces";
import { IEffect } from "../ts/interfaces/effect.interfaces";
import { Attribute } from "../models/attribute.model";
import { Effect } from "../models/effect.model";
import { Product } from "../models/product.model";
import { Hero } from "../models/hero.model";
import { heroType, subHeroType } from "../ts/types/hero.type";
import { IProduct } from "../ts/interfaces/product.interfaces";

export class HeroService {
    static createHeroFromJSON(json: IHero): Hero {
        const attributesArray = Object.keys(json.attributes).map((key) => {
            const attr = json.attributes[key];
            return new Attribute(
                attr._name,
                attr._value,
                attr.valueMin,
                attr.valueMax
            );
        });

        const effects = json.products.flatMap((product: IProduct) =>
            product.effects.map((effect: IEffect) => {
                return new Effect(
                    new Attribute(
                        effect.attribute._name,
                        effect.attribute._value,
                        effect.attribute.valueMin,
                        effect.attribute.valueMax
                    ),
                    effect.mathOperator,
                    effect.turns,
                    effect.target,
                    effect.value
                );
            })
        );

        const products = json.products.map((product: IProduct) => {
            const productAttributeNames = product.effects.map(
                (e: IEffect) => e.attribute._name
            );

            const productEffects = effects.filter((effect) =>
                productAttributeNames.includes(effect.attribute.name)
            );

            return new Product(
                product.productName,
                product.productDescription,
                product.productType,
                product.heroType,
                product.subHeroType,
                product.dropChance,
                productEffects,
                [],
                product.imagePath
            );
        });

        return new Hero(
            json.idUser,
            json.type as heroType,
            json.subtype as subHeroType,
            attributesArray,
            products
        );
    }
}
