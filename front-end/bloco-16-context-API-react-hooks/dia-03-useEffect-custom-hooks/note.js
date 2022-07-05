// useEffect() não tem retorno
// o que importa são os argumentos
// o primeiro é uma função e o segundo é um array (opcional)
// useEffect(() => {}, [])
// effect function e dependency array


// no array de dependências
// array vazio -> didMount
// não passar nada => didUpdate
// array com dependêcnias -> didmount condicional
// se o retorno da função for outra função, o useeffect vai ser equivalente ao willunmount
