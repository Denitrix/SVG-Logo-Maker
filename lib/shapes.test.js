const { Circle, Square, Triangle } = require("./shapes");

describe("Test Circle class", () => {
  it("Render Circle shape", () => {
    const circle = new Circle("SVG", "white", "green");
    expect(circle.renderShape()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="green" />`
    );
  });
  it("Render Circle text", () => {
    const circle = new Circle("SVG", "white", "green");
    expect(circle.renderText()).toEqual(
      `<text x="150" y="120" font-size="80" text-anchor="middle" fill="white">SVG</text>`
    );
  });
});

describe("Test Square class", () => {
  it("Render Square shape", () => {
    const square = new Square("SVG", "white", "green");
    expect(square.renderShape()).toEqual(
      `<rect x="0" y="0" width="300" height="200" fill="green" />`
    );
  });
  it("Render Square text", () => {
    const square = new Square("SVG", "white", "green");
    expect(square.renderText()).toEqual(
      `<text x="150" y="120" font-size="80" text-anchor="middle" fill="white">SVG</text>`
    );
  });
});

describe("Test Triangle class", () => {
  it("Render Triangle shape", () => {
    const triangle = new Triangle("SVG", "white", "green");
    expect(triangle.renderShape()).toEqual(
      `<polygon points="150, 0 300, 200 0, 200" fill="green" />`
    );
  });
  it("Render Triangle text", () => {
    const triangle = new Triangle("SVG", "white", "green");
    expect(triangle.renderText()).toEqual(
      `<text x="150" y="120" font-size="80" text-anchor="middle" fill="white">SVG</text>`
    );
  });
});
