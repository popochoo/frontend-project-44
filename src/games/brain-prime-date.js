import baseLogic from '../index.js';

const dataPreparationBrainPrime = () => {
  const correctAnswer = (number) => {
    const primeNumbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ];
    const isPrime = primeNumbers.includes(number);
    const rightAnswer = isPrime ? 'yes' : 'no';
    return rightAnswer;
  };

  const randomQuestion = () => Math.round(Math.random() * 10);

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainPrime;
