const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  const result = data.filter(
    (str) => str.match(/(..).*?(\1)/gm) && str.match(/(.).\1/)
  );

  console.log(result.length);
} catch (err) {
  console.error(err);
}
