import { describe, expect, test } from "@jest/globals";
import { testFunction } from "../src/index.js";

describe("testFunction", () => {
    test("should return the prefixed message", () => {
        const result = testFunction("Hello");
        expect(result).toBe("Test Function: Hello");
    });
});
