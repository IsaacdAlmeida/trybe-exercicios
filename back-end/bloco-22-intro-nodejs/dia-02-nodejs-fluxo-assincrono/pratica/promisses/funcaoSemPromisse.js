const calcularDivisao = (num1, num2) => {
  if (num2 == 0) throw new Error('Não pode ser feito uma divisão por 0');

  const resultado = num1 / num2;

  return resultado
};

try {
  const resultado = calcularDivisao(2, 0);
  const style = 'color: red; font-weight: bold'
  console.log("Resultado %s", resultado);
} catch (error) {
  console.log("erro: %s", error.message);
};

