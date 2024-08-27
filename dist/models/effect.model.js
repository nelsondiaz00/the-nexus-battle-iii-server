export class Effect {
    attribute;
    mathOperator;
    turns;
    target;
    value;
    valueCaused;
    // product: Product | null; req. future
    constructor(attribute, mathOperator, turns, target, value
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
