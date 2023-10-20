import baseLogic from "../index.js";
import {checkPrimeSync as isPrime} from 'node:crypto';

const dataPreparationBrainPrime = () => {
    const correctAnswer = (number) => {
        if (isPrime(number)) {
            return 'yes';
        } else {
            return 'no';
        };
    };

    const randomQuestion = () => {
        return Math.round(Math.random() * 10)
    }

    const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

    baseLogic(rules, randomQuestion, correctAnswer);
};