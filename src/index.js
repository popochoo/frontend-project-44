import readlineSync from 'readline-sync';

const baseLogic = (rules, randomQuestion, correctAnswer) => {
    console.log('Welcome to the Brain Games!');
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);

    let roundCount = 0;

    while (roundCount < 3) {
        console.log(rules);
        
        const question = randomQuestion();
        const answer = correctAnswer(question);
        
        console.log(`Question: ${question}`)

        const answerOfUser = readlineSync.question('Your answer: ');

        if (answerOfUser === answer) {
            console.log('Correct!');
            roundCount += 1;
        } else {
            console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${username}!`);
            break;
        };
    };

    if (roundCount === 3) {
        console.log(`Congratulations, ${username}!`);
    };
};

export default baseLogic;