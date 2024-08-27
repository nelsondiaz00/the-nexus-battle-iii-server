import { Product } from "../../src/models/product.model";
import { Hero } from "../../src/models/hero.model";
import { Effect } from "../../src/models/effect.model";
import { Attribute } from "../../src/models/attribute.model";
import { heroType, subHeroType } from "../../shared/ts/types/hero.type";
import { productType } from "../../shared/ts/types/product.type";

// mocks for testing

const attributesArray = [
    new Attribute("critical", 10, 0, 0),
    new Attribute("defense", 100, 0, 0),
];

const mockHero = new Hero(
    "user123",
    "warrior" as heroType,
    "tank" as subHeroType,
    attributesArray,
    []
);

const mockEffect = new Effect(
    new Attribute("defense", 10, 0, 0),
    "+",
    1,
    "player",
    20
);

const mockProduct = new Product(
    "Sword of Power",
    "A powerful sword.",
    "weapon" as productType,
    "warrior" as heroType,
    "tank" as subHeroType,
    "0.1",
    [mockEffect],
    [],
    "/images/sword.png"
);

describe("Product", () => {
    describe("useProduct", () => {
        it("should correctly apply effects to hero attributes", () => {
            const updatedAttributes = mockProduct.useProduct(mockHero);
            expect(updatedAttributes["defense"].value).toBe(
                100 + mockEffect.value
            );
        });

        it("should handle cases where an attribute is not found", () => {
            const invalidProduct = new Product(
                "Cursed Sword",
                "A sword with no valid effects.",
                "weapon" as productType,
                "warrior" as heroType,
                "tank" as subHeroType,
                "0.1",
                [],
                [],
                "/images/cursed_sword.png"
            );

            // Aplica el producto al héroe
            const updatedAttributes = invalidProduct.useProduct(mockHero);

            // Verifica que los atributos permanezcan igual
            expect(updatedAttributes["defense"].value).toBe(
                mockHero.attributes["defense"].value
            );
        });
    });
});
