const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  let result = {};
  let parsedData;

  const reparseData = () => {
    parsedData = data.map((str) => {
      const splittedData = str.trim().split(/(->|AND|RSHIFT|LSHIFT|OR|NOT)/g);
      if (
        splittedData.includes("AND") ||
        splittedData.includes("OR") ||
        splittedData.includes("RSHIFT") ||
        splittedData.includes("LSHIFT")
      ) {
        return {
          value1: splittedData[0].trim(),
          value2: splittedData[2].trim(),
          code: splittedData[1],
          to: splittedData[4].trim(),
        };
      } else if (splittedData.includes("NOT")) {
        return {
          value1: splittedData[2].trim(),
          code: splittedData[1],
          to: splittedData[4].trim(),
        };
      } else {
        if (!isNaN(splittedData[0])) {
          const letter = splittedData[2].trim();
          result[letter] = parseInt(splittedData[0], 10);
        } else {
          return {
            value1: splittedData[0].trim(),
            to: splittedData[2].trim(),
          };
        }
      }
    });
  };

  reparseData();
  const instructions = parsedData.filter((ins) => ins);

  const execute = (instruction) => {
    const { value1, value2, code, to } = instruction;

    const getValue1 = isNaN(value1) ? result[value1] : parseInt(value1, 10);
    const getValue2 = isNaN(value2) ? result[value2] : parseInt(value2, 10);

    if (code === "AND") {
      result[to] = getValue1 & getValue2;
    } else if (code === "OR") {
      result[to] = getValue1 | getValue2;
    } else if (code === "RSHIFT") {
      result[to] = getValue1 >> parseInt(value2, 10);
    } else if (code === "LSHIFT") {
      result[to] = getValue1 << parseInt(value2, 10);
    } else if (code === "NOT") {
      result[to] = 65535 - getValue1;
    } else if (!value2) {
      result[to] = getValue1;
    }
  };

  const executeInstruction = () => {
    instructions.filter((ins) => {
      if (Object.keys(result).indexOf(ins.value1) > -1 || !isNaN(ins.value1)) {
        if (
          Object.keys(result).indexOf(ins.value2) > -1 ||
          !isNaN(ins.value2) ||
          !ins.value2
        ) {
          execute(ins);
        }
      }
    });
    while (Object.keys(result).indexOf("a") === -1) {
      executeInstruction();
    }
  };

  executeInstruction();

  // Get a value from part 1;
  const firstPartValue = result.a;

  // reset the result object;
  result = {};
  // reparse the data
  reparseData();

  // assign the a value from part 1 to b
  result.b = firstPartValue;

  // re-execute the instructions
  executeInstruction();

  // get the new a value
  console.log(result.a);
} catch (err) {
  console.error(err);
}
