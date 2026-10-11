
import { describe, it, expect } from "@jest/globals";
import { canTransition } from "../services/IncidentStateMachines.ts";

describe("canTransition", () => {
    it("allows valid forward transitions", () => {
        expect(canTransition("investigating", "identified")).toBe(true);
        expect(canTransition("investigating", "resolved")).toBe(true);
    });

    it("rejects transitions to the same status", () => {
        expect(canTransition("investigating", "investigating")).toBe(false);
        expect(canTransition("resolved", "resolved")).toBe(false);
    });

    it("allows reopening a resolved incident", () => {
        expect(canTransition("resolved", "investigating")).toBe(true);
    });

    it("rejects invalid transitions from resolved", () => {
        expect(canTransition("resolved", "identified")).toBe(false);
        expect(canTransition("resolved", "monitoring")).toBe(false);
    });
});
