const fs = require('fs'); // importamos o módulo fs

const nomeDoArquivo = 'meu-arquivo.txt'; // variável com nome do arquivo

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

fs.readFileSync; // invocamos o módulo fs