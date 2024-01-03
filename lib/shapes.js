class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  renderText() {
    return `<text x="150" y="120" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderShape() {
    return `<polygon points="150, 0 300, 200 0, 200" fill="${this.shapeColor}" />`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderShape() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  renderShape() {
    return `<rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
