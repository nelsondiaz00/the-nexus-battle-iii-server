import { HeroService } from "../../src/services/hero.service";
import { Hero } from "../../src/models/hero.model";
import { IHero } from "../../src/ts/interfaces/hero.interfaces";
import * as fs from "fs";
import * as path from "path";

describe("HeroService", () => {
    let heroJson: IHero;

    beforeAll(() => {
        const filePath = path.resolve(
            __dirname,
            "../models/database/input1.json"
        );
        heroJson = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    });

    it("should create a Hero from JSON", () => {
        const hero = HeroService.createHeroFromJSON(heroJson);

        // Verify that the hero has been created correctly
        expect(hero).toBeInstanceOf(Hero);
        expect(hero.idUser).toBe(heroJson.idUser);
        expect(hero.type).toBe(heroJson.type);
        expect(hero.subtype).toBe(heroJson.subtype);

        // Verify the attributes in the map
        const heroAttributes = hero.attributes;
        const jsonAttributes = heroJson.attributes;

        // Verify that the number of attributes in the map is as expected
        expect(Object.keys(heroAttributes).length).toBe(
            Object.keys(jsonAttributes).length
        );

        // Verify that all attributes from the JSON are present in the map
        for (const key in jsonAttributes) {
            const attr = jsonAttributes[key];
            expect(heroAttributes[key]).toBeDefined();
            expect(heroAttributes[key].name).toBe(attr._name);
            expect(heroAttributes[key].value).toBe(attr._value);
        }

        // Verify the products
        expect(hero.products.length).toBe(heroJson.products.length);
        expect(hero.products[0].productName).toBe(
            heroJson.products[0].productName
        );
        expect(hero.products[0].effects.length).toBe(
            heroJson.products[0].effects.length
        );
    });
});
