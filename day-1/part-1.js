const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n")
    .join("")
    .split("");

  let result = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      result++;
    } else {
      result--;
    }
  }
  console.log(result);
} catch (err) {
  console.error(err);
}
