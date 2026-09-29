/*
 * THIS CODE IS OUR OWN WORK, IT WAS WRITTEN WITHOUT CONSULTING
 * A TUTOR OR CODE WRITTEN BY OTHER STUDENTS OUTSIDE OF OUR TEAM.
 * - Danny Chen, Ruilin Chen, Leah Loukedis, Chloe Peyrebrune, Coralynn Yang, Sihao Zhang
 */
import { describe, expect, it } from "vitest";
import { formatPrice } from "./format";

describe("formatPrice", () => {
  it("labels zero as Free", () => {
    expect(formatPrice(0)).toBe("Free");
  });

  it("drops cents on whole-dollar prices", () => {
    expect(formatPrice(4500)).toBe("$45");
  });

  it("keeps cents otherwise", () => {
    expect(formatPrice(1299)).toBe("$12.99");
  });
});
