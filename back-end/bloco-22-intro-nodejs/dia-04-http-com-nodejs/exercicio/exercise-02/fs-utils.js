const fs = require('fs/promises');

async function readSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(fileContent);
};

function createSimpsons(newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
};

module.exports = { 
  readSimpsons, 
  createSimpsons 
};