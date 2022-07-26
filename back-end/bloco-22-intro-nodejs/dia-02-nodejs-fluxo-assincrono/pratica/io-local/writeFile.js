const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu teste de arquivo foi modificado') // mesmos params do readFile, mas no segundo param recebe o texto a ser modificado
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  // com async await

  const fs = require('fs').promises;

/* async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main() */