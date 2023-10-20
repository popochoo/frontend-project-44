import baseLogic from "../index.js";

const dataPreparationBrainPrime = () => {
    const correctAnswer = (number) => {
        if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    return 'no';
                };
            };
            return 'yes';
        }; 
    };

    const randomQuestion = () => {
        return Math.round(Math.random() * 10);
    };

    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainPrime;