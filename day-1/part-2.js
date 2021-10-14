const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n")
    .join("")
    .split("");

  let result = 0;
  let position;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      result++;
    } else {
      result--;
    }

    if (result === -1) {
      position = i + 1;
      break;
    }
  }
  console.log(position);
} catch (err) {
  console.error(err);
}
