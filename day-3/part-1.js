const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("");

  let houseVisited = [[0, 0]];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === ">") {
      const newMove = houseVisited[i][0] + 1;
      houseVisited.push([newMove, houseVisited[i][1]]);
    } else if (data[i] === "<") {
      const newMove = houseVisited[i][0] - 1;
      houseVisited.push([newMove, houseVisited[i][1]]);
    } else if (data[i] === "^") {
      const newMove = houseVisited[i][1] + 1;
      houseVisited.push([houseVisited[i][0], newMove]);
    } else if (data[i] === "v") {
      const newMove = houseVisited[i][1] - 1;
      houseVisited.push([houseVisited[i][0], newMove]);
    }
  }

  console.log(houseVisited.filter(((t = {}), (a) => !(t[a] = a in t))).length);
} catch (err) {
  console.error(err);
}
