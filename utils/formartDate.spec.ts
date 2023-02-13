import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("format iso date correctly", () => {
    const format = formatDate(new Date("2023-02-13T00:58:26.249Z").toISOString());
    expect(format).toEqual("02/12/2023, 09:58:26 PM");
  });

  it("format iso date only correctly", () => {
    const format = formatDate(new Date("2023-02-13T00:58:26.249Z").toISOString(), {
      dateOnly: true,
    });
    expect(format).toEqual("02/12/2023");
  });

  it("return empty to invalid input", () => {
    const format = formatDate("");
    expect(format).toEqual("");
  });
});
