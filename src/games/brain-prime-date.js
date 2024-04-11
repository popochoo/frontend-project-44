import baseLogic from '../index.js';

const dataPreparationBrainPrime = () => {
  const correctAnswer = (number) => {
    let answer = 'yes';
    if (number !== 1) {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          answer = 'no';
        }
      }
    }

    return answer;
  };

  const randomQuestion = () => Math.round(Math.random() * 10);

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainPrime;
