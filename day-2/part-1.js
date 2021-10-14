const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  let totalWrapping = 0;

  data.map((dim) => {
    const dimArr = dim.split("x").map((num) => parseInt(num, 10));

    const length = dimArr[0];
    const width = dimArr[1];
    const height = dimArr[2];

    dimArr.sort((a, b) => a - b);
    const extraPaper = dimArr[0] * dimArr[1];

    totalWrapping +=
      2 * (length * width) +
      2 * (width * height) +
      2 * (height * length) +
      extraPaper;
  });

  console.log(totalWrapping);
} catch (err) {
  console.error(err);
}
