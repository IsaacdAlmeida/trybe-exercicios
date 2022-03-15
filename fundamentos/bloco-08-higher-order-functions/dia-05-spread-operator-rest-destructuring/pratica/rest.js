function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
const params = quantosParams('string', null, [1, 2, 3], {});
console.log(params); // Você passou 4 parâmetros para a função.