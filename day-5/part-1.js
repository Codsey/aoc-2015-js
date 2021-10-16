const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n");

  let result = 0;

  for (let i = 0; i < data.length; i++) {
    const hasVowel = data[i].match(/[aeiou]/gi);
    const hasDuplicates = /([a-z])\1/i.test(data[i]);
    const hasIllegalLetters = /ab|cd|pq|xy/.test(data[i]);

    if (
      hasVowel &&
      hasVowel.length >= 3 &&
      hasDuplicates &&
      !hasIllegalLetters
    ) {
      result++;
    }
  }
  console.log(result);
} catch (err) {
  console.error(err);
}
