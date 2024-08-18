import { Config } from "../../config/config";
import { Product } from "./product";

export class Effect {
    attributeName: string;
    operator: string;
    turns: number;
    target: string;
    value: number;
    valueCaused: number;
    product: Product | null;

    constructor(
        attributeName: keyof typeof Config.Attribute,
        operator: keyof typeof Config.MathOperation,
        turns: number,
        target: keyof typeof Config.Target,
        value: number,
        product: Product | null
    ) {
        this.attributeName = Config.Attribute[attributeName];
        this.operator = Config.MathOperation[operator];
        this.turns = turns;
        this.target = Config.Target[target];
        this.product = product;
        this.value = value;
        this.valueCaused = 0;
    }

    accumulateValue(): void {
        this.valueCaused += this.value;
    }
}
