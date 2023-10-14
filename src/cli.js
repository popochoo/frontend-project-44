import readlineSync from 'readline-sync';

const getUsername = () => {
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
};

export default getUsername;
