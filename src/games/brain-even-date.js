import baseLogic from '../index.js';

const dataPreparationBrainEven = () => {
  const correctAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const randomQuestion = () => Math.round(Math.random() * 101);

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainEven;
