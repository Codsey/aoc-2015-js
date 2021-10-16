const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  const parsedData = data.map((str) => {
    const splittedStr = str.split(/([0-9]+)/);

    return {
      action: splittedStr[0].trim(),
      from: [parseInt(splittedStr[1], 10), parseInt(splittedStr[3], 10)],
      to: [parseInt(splittedStr[5], 10), parseInt(splittedStr[7], 10)],
    };
  });

  const lights = [];

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      lights.push([i, j, false]);
    }
  }

  const action = (from, to, action) => {
    for (let i = from[0]; i <= to[0]; i++) {
      for (let j = from[1]; j <= to[1]; j++) {
        const index = 1000 * i + j;
        lights[index][2] =
          action === "toggle"
            ? !lights[index][2]
            : action === "turn on"
            ? true
            : false;
      }
    }
  };

  for (let i = 0; i < parsedData.length; i++) {
    action(parsedData[i].from, parsedData[i].to, parsedData[i].action);
  }

  console.log(lights.filter((x) => x[2] === true).length);
} catch (err) {
  console.error(err);
}
