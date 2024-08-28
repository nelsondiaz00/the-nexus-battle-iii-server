import { attributeName } from "../types/attribute.type";

export interface IAttribute {
    _name: attributeName;
    _value: number;
    valueMin: number;
    valueMax: number;
}
