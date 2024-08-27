// import { IHero } from "../ts/interfaces/hero.interfaces";
export class Hero {
    idUser;
    // idHero: string;
    type;
    subtype;
    attributes;
    products;
    constructor(idUser, 
    // idHero: string,
    type, subtype, attributesArray, products) {
        // this.idHero = idHero;
        this.idUser = idUser;
        this.type = type;
        this.subtype = subtype;
        this.attributes = this.createAttributesMap(attributesArray.map((attr) => attr.clone()));
        this.products = products;
    }
    createAttributesMap(attributes) {
        return attributes.reduce((map, attr) => {
            map[attr.name] = attr;
            return map;
        }, {});
    }
}
