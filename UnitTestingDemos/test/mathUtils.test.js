import { describe,it,expect } from "vitest";
import { add,subtract,multiply,divide } from "../src/mathutils";
describe("Math Utilities",()=>{
    it("should sum two numbers",() => {
        expect(add(2,3)).toBe(5)
        expect(add(-1,1)).toBe(0)
    })
    it("should subtract one number from the other", ()=>{
        expect(subtract(5,3)).toBe(2)
    })
    it("should multiply two numbers",()=>{
        expect(multiply(3,2)).toBe(6)
        expect(multiply(-3,2)).toBe(-6)
    })
    it("should divided one number to another",()=>{
        expect(divide(6,3)).toBe(2)
        expect(divide(5,2)).toBe(2.5)
    })
    it("should throw new error when dividing by zero",()=>{
        expect(()=>divide(5,0)).toThrow("Division by zero is not allowed")
    })
})