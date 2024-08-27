export class Attribute {
    _name;
    _value;
    valueMin;
    valueMax;
    valueConstant;
    constructor(name, value, valueMin, valueMax) {
        this._name = name;
        this.valueConstant = value;
        this.valueMin = valueMin;
        this.valueMax = valueMax;
        this._value = value;
    }
    get name() {
        return this._name;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (val >= 0) {
            this._value = val;
        }
        else {
            console.error("attribute can't be negative");
        }
    }
    clone() {
        return new Attribute(this._name, this.value, this.valueMin, this.valueMax);
    }
    changeOnValue() {
        return this._value - this.valueConstant;
    }
    getValueChangement() {
        return (this._value +
            Math.floor(Math.random() * (this.valueMax - this.valueMin + 1) +
                this.valueMin));
    }
}
