const fs = require('fs/promises');

function readSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
};

function createSimpsons(newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
};

module.exports = { 
  readSimpsons, 
  createSimpsons 
};