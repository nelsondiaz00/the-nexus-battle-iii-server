import { Product } from "./product";
import { Attribute } from "./attribute";
import { Config } from "../../config/config";

export class Condition {
    //requiredProduct: Product;
    attribute1: Attribute;
    attribute2: Attribute;
    operator: string;

    constructor(
        requiredProduct: Product,
        attribute1: Attribute,
        attribute2: Attribute,
        operator: keyof typeof Config.MathOperation
    ) {
        //this.requiredProduct = requiredProduct;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.operator = Config.MathOperation[operator];
    }
}
