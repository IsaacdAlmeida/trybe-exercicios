// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Manga', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Mel', 'Leite em pó'];

const fruitSalad = (fruit, additional) => {
  const mix = [...fruit, ...additional]
  return mix
};

console.log(fruitSalad(specialFruit, additionalItens));