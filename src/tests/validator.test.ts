import { describe, it, expect } from "vitest";
import validator from "../src/validator";
import example from "../examples/example-image.json";

describe("HIP412 validator", () => {
  it("validates example", () => {
    const res = validator.validate(example);
    expect(res.valid).toBe(true);
  });
});
