import { Attribute } from "../../src/models/attribute.model";

// Unit test for changeOnValue() method in Attribute class
it("should return a positive number when value > value constant", () => {
    const attribute = new Attribute("health", 10, 5, 15);
    expect(attribute.changeOnValue()).toBe(0);
});

it("should return a value in range [valueMin, valueMax", () => {
    const value = 10;
    const valueMin = 1;
    const valueMax = 5;
    const attribute = new Attribute("health", value, valueMin, valueMax);

    const variableNumber = attribute.getValueChangement();

    // Check if the result is within the expected range
    expect(variableNumber).toBeGreaterThanOrEqual(value + valueMin);
    expect(variableNumber).toBeLessThanOrEqual(value + valueMax);
});

test('should set value when positive and log an error when negative', () => {
    const attribute = new Attribute("health", 10, 5, 15);

    attribute.value = 10;
    expect(attribute.value).toBe(10);

    console.error = jest.fn();

    attribute.value = -5;
    expect(attribute.value).toBe(10); 
    expect(console.error).toHaveBeenCalledWith("attribute can't be negative");

    (console.error as jest.Mock).mockRestore();
});

