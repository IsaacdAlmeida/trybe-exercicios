//HOF - 3 param - array resposta corretas, array resposta estudantes, funcao que checa as respostas e compara

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const pointsCallback = (rightAnswer, studentAnswer) => {
  if(rightAnswer === studentAnswer) {
    return 1
  }
  if(studentAnswer === 'N.A') {
    return 0
  }
  return -0.5
};


const hofChecking = (rightAnswer, studentAnswer, callback) => {
  let points = 0;
  for (let index in rightAnswer) {
    points += callback(rightAnswer[index], studentAnswer[index]);
  }
  return points
}

console.log(hofChecking(RIGHT_ANSWERS, STUDENT_ANSWERS, pointsCallback))