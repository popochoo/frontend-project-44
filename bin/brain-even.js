import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0

while (count < 3) {
    const number = Math.round(Math.random() * 101);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (number % 2 === 0 && answer === 'yes') {
        console.log('Correct!');
        count += 1
    } 
    
    else if (number % 2 !== 0 && answer === 'no') {
        console.log('Correct!');
        count += 1
    } 
    
    else if (number % 2 === 0 && answer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${username}!`);
        break
    }
    
    else if (number % 2 !== 0 && answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${username}!`);
        break
    }

    else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${username}!`);
        break
    };
};

if (count === 3) {
    console.log(`Congratulations, ${username}!`)
};