import { Attribute } from "../../src/models/attribute.model";

it("should return a false boolean when condition false and true when condition true", () => {
    const attribute1 = new Attribute("armor", 10, 5, 15);
    const attribute2 = new Attribute("armor", 10, 5, 15);
    
    expect(attribute.changeOnValue()).toBe(0);
});
