const fs = require("fs");
const path = require("path");

let existingGuitars = require("./guitarData");

function deleteGuitar(guitarData) {
  const guitarArray = [...existingGuitars];
  const findOneGuitar = guitarArray.findIndex(() => {
    return guitarData;
  });

  const slicedArr = guitarArray.slice(findOneGuitar + 1);
  const jsonOutput = JSON.stringify(slicedArr);
  fs.writeFileSync(path.resolve(__dirname, "guitars.json"), jsonOutput);
  return "success";
}

module.exports = deleteGuitar;
