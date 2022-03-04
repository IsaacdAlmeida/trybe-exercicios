// primeiro - função que calcula fatorial

/* const calculateFatorial = num => num === 1 ? 1 : num * calculateFatorial(num-1);

console.log(calculateFatorial(8));
 */


// segundo - retorna a maior palavra de uma frase
// https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/#:~:text=Without%20comments%3A-,function%20findLongestWord(str)%20%7B%20var%20longestWord%20%3D%20str.,length%20%3E%20longest.
const longestWord = sentence => {
  const word = sentence.split(' ').sort(function(a, b) {return b.length - a.length;}); // 'splita a frase e depois coloca em ordem do maior para o menor
  return word[0]; // retorna a pala
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));