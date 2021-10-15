const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("");

  let santaHouseVisited = [[0, 0]];
  let roboSantaHouseVisited = [[0, 0]];

  const isEven = (number) => {
    return number % 2 == 0;
  };

  const getPreviousPosition = (isSanta) => {
    return isSanta
      ? santaHouseVisited[santaHouseVisited.length - 1]
      : roboSantaHouseVisited[roboSantaHouseVisited.length - 1];
  };

  for (let i = 0; i < data.length; i++) {
    const isSanta = isEven(i);
    if (data[i] === ">") {
      const previousPosition = getPreviousPosition(isSanta);
      const newMove = previousPosition[0] + 1;
      isSanta
        ? santaHouseVisited.push([newMove, previousPosition[1]])
        : roboSantaHouseVisited.push([newMove, previousPosition[1]]);
    } else if (data[i] === "<") {
      const previousPosition = getPreviousPosition(isSanta);
      const newMove = previousPosition[0] - 1;

      isSanta
        ? santaHouseVisited.push([newMove, previousPosition[1]])
        : roboSantaHouseVisited.push([newMove, previousPosition[1]]);
    } else if (data[i] === "^") {
      const previousPosition = getPreviousPosition(isSanta);
      const newMove = previousPosition[1] + 1;

      isSanta
        ? santaHouseVisited.push([previousPosition[0], newMove])
        : roboSantaHouseVisited.push([previousPosition[0], newMove]);
    } else if (data[i] === "v") {
      const previousPosition = getPreviousPosition(isSanta);
      const newMove = previousPosition[1] - 1;

      isSanta
        ? santaHouseVisited.push([previousPosition[0], newMove])
        : roboSantaHouseVisited.push([previousPosition[0], newMove]);
    }
  }
  console.log(
    santaHouseVisited
      .concat(roboSantaHouseVisited)
      .filter(((t = {}), (a) => !(t[a] = a in t))).length
  );
} catch (err) {
  console.error(err);
}
