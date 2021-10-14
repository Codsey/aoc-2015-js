const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  let totalRibbon = 0;

  data.map((dim) => {
    const dimArr = dim
      .split("x")
      .map((num) => parseInt(num, 10))
      .sort((a, b) => a - b);

    totalRibbon +=
      dimArr[0] +
      dimArr[0] +
      (dimArr[1] + dimArr[1]) +
      dimArr[0] * dimArr[1] * dimArr[2];
  });

  console.log(totalRibbon);
} catch (err) {
  console.error(err);
}
