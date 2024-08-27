import { IAttribute } from "./attribute.interfaces";
import { IProduct } from "./product.interfaces";

export interface IHero {
    idUser: string;
    type: string;
    subtype: string;
    attributes: { [key: string]: IAttribute };
    products: IProduct[];
}
