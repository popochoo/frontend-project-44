import readlineSync from 'readline-sync';

export const get_username = () => {
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
};