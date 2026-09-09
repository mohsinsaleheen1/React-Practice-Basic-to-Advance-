import { describe,it,expect } from "vitest";
import { toLowerCase,toUpperCase,capitalize,reverse } from "../src/stringUtils";
describe('String Utitiles',() => {
    it("should return string in uppercase",() => {
        expect(toUpperCase("hello")).toBe("HELLO");
    })
    it("should return string in Lowercase",() => {
        expect(toLowerCase("HELLO")).toBe("hello");
    })
    it("should return string in Capatalize",() => {
        expect(capitalize("hello")).toBe("Hello");
    })
    it("should return string in Reverse",() => {
        expect(reverse("hello")).toBe("olleh");
    })
})
