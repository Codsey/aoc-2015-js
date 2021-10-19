const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  console.log(
    data.reduce((sum, str) => sum + str.trim().length - eval(str).length, 0)
  );
} catch (err) {
  console.error(err);
}
