// import { Product } from "./product.model";
import * as math from "mathjs";
export class Condition {
    //requiredProduct: Product;
    attribute1;
    attribute2;
    logicOperator;
    constructor(
    // requiredProduct: Product,
    attribute1, attribute2, logicOperator) {
        //this.requiredProduct = requiredProduct;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.logicOperator = logicOperator;
    }
    evaluateCondition() {
        const result = this.attribute1 + this.logicOperator + this.attribute2;
        return math.evaluate(result);
    }
}
