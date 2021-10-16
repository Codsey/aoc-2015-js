var crypto = require("crypto");
let input = "bgvyzdsv";
let num = 0;

while (
  !crypto
    .createHash("md5")
    .update(input.concat(num))
    .digest("hex")
    .startsWith("00000")
) {
  num++;
}

console.log(num);
