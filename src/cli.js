import readlineSync from 'readline-sync';

const getUsername = () => {
    const username = readlineSync.question('May I have your name? ');
    return `Hello, ${username}!`;
};

export default getUsername;
