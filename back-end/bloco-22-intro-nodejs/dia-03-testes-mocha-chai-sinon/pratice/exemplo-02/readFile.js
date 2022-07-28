const fs = require('fs');

const readFile = (filename) => {
  try {
    const data = fs.readFile(filename);
    return data.toString();
  } catch (error) {
    return null;
  }
}

module.exports = readFile;