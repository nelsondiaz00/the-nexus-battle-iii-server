import { Config } from "../../config/config";

export class Attribute {
    name: string;
    value: number;
    valueMin: number;
    valueMax: number;
    valueConstant: number;

    constructor(
        name: keyof typeof Config.Attribute,
        value: number,
        valueMin: number,
        valueMax: number
    ) {
        this.name = Config.Attribute[name];
        this.valueConstant = value;
        this.valueMin = valueMin;
        this.valueMax = valueMax;
        this.value = value;
    }

    changeOnValue(): number {
        return this.value - this.valueConstant;
    }

    getValueChangement() {
        return (
            this.value +
            Math.floor(Math.random() * (this.valueMax - this.valueMin + 1))
        );
    }
}
