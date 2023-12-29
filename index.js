const inquirer = reqire("inquirer");
const { writeFile } = require("fs/promises");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter the text for your logo (up to 3 caracters): ",
    validate(value) {
      if (value.length <= 3) {
        return true;
      } else {
        return "Entry too long. Please only enter 3 characters.";
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter desired text color (color keyword or hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape for the logo:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter desired shape color (color keyword or hexadecimal number):",
  },
];
