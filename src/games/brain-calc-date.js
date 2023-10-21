import baseLogic from '../index.js';

const dataPreparationBrainCalc = () => {
  const correctAnswer = (expression) => {
    const elements = expression.split(' ');
    let correctNumber = 0;

    if (elements[1] === '+') {
      correctNumber = (Number(elements[0]) + Number(elements[2])).toString();
    } if (elements[1] === '-') {
      correctNumber = (Number(elements[0]) - Number(elements[2])).toString();
    } if (elements[1] === '*') {
      correctNumber = (Number(elements[0]) * Number(elements[2])).toString();
    }

    return correctNumber;
  };

  const randomQuestion = () => {
    const operator = ['+', '-', '*'];

    return `${Math.round(Math.random() * 101)} ${operator[Math.floor(Math.random() * operator.length)]} ${Math.round(Math.random() * 101)}`;
  };

  const rules = 'What is the result of the expression?';

  baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainCalc;
