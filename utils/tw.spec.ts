import { formatDate } from "./formatDate";
import { tw } from "./tw";

describe("tw", () => {
  it("return tailwind classes", () => {
    const classes = tw("flex relative");
    expect(classes).toEqual("flex relative");
  });
});
