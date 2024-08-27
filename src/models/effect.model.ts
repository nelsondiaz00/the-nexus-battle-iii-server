import { Attribute } from "./attribute.model";
import { targetType } from "../../shared/ts/types/effect.type";

export class Effect {
    attribute: Attribute;
    mathOperator: string;
    turns: number;
    target: targetType;
    value: number;
    valueCaused: number;
    // product: Product | null; req. future

    constructor(
        attribute: Attribute,
        mathOperator: string,
        turns: number,
        target: targetType,
        value: number
        // product: Product | null req. futuro
    ) {
        this.attribute = attribute;
        this.mathOperator = mathOperator;
        this.turns = turns;
        this.target = target;
        // this.product = product; req. future
        this.value = value;
        this.valueCaused = 0;
    }

    accumulateValue() {
        this.valueCaused += this.value;
    }
}
