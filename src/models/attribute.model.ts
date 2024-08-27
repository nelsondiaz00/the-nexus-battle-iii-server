import { attributeName } from "../../shared/ts/types/attribute.type";
export class Attribute {
    private _name: attributeName;
    private _value: number;
    private valueMin: number;
    private valueMax: number;
    private valueConstant: number;

    constructor(
        name: attributeName,
        value: number,
        valueMin: number,
        valueMax: number
    ) {
        this._name = name;
        this.valueConstant = value;
        this.valueMin = valueMin;
        this.valueMax = valueMax;
        this._value = value;
    }

    get name(): attributeName {
        return this._name;
    }

    get value(): number {
        return this._value;
    }

    set value(val: number) {
        if (val >= 0) {
            this._value = val;
        } else {
            console.error("attribute can't be negative");
        }
    }

    public clone(): Attribute {
        return new Attribute(
            this._name,
            this.value,
            this.valueMin,
            this.valueMax
        );
    }

    public changeOnValue(): number {
        return this._value - this.valueConstant;
    }

    public getValueChangement() {
        return (
            this._value +
            Math.floor(
                Math.random() * (this.valueMax - this.valueMin + 1) +
                    this.valueMin
            )
        );
    }
}
