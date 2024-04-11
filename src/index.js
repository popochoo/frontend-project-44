import readlineSync from 'readline-sync';

const baseLogic = (rules, randomQuestion, correctAnswer) => {
  console.log('Welcome to the Brain Games!\n');
  const username = readlineSync.question('May I have your name? \n');
  console.log(`Hello, ${username}!\n`);
  console.log(rules);

  let roundCount = 0;

  while (roundCount < 3) {
    const question = randomQuestion();
    const answer = correctAnswer(question);

    console.log(`Question: ${question}\n`);

    const answerOfUser = readlineSync.question('Your answer: \n');

    if (answerOfUser === answer) {
      console.log('Correct!\n');
      roundCount += 1;
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${answer}'.\n`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }

  if (roundCount === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default baseLogic;
