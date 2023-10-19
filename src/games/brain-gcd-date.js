import baseLogic from "../index.js";

const dataPreparationBrainGcd = () => {
    const correctAnswer = (numbers) => {
        const listNumbers = numbers.split(' ');
        let x = Number(listNumbers[0]);
        let y = Number(listNumbers[1]);
    
        while (x !== y) {
            if (x > y) {
                x -= y;
            } else {
                y -= x;
            };
        };
    
        return x.toString();
    };

    const randomQuestion = () => {
        return `${Math.round(Math.random() * 101)} ${Math.round(Math.random() * 101)}`
    }

    const rules = 'Find the greatest common divisor of given numbers.';

    baseLogic(rules, randomQuestion, correctAnswer);
};