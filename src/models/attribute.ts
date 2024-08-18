import { Config } from "../../config/config";

export class Attribute {
    name: string;
    value: number;

    constructor(name: keyof typeof Config.Attribute, value: number) {
        this.name = Config.Attribute[name];
        this.value = value;
    }
}
