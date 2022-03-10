const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

//HOF - 3 param - array resposta corretas, array resposta estudantes, funcao que checa as respostas e compara


const hofChecking = (rightAnswer, studentAnswer, callback) => {
  let points = 0;
  for (let index in rightAnswer) {
    points += callback(rightAnswer[index], studentAnswer[index]);
  }
  return points
}

// função de callback/ retorna números, assim o contador points faz os incrementos

const pointsCallback = (rightAnswer, studentAnswer) => {
  if(studentAnswer === 'N.A') {
    return 0
  }
  if(rightAnswer === studentAnswer) {
    return 1
  }
  return -0.5
};

console.log(hofChecking(RIGHT_ANSWERS, STUDENT_ANSWERS, pointsCallback))