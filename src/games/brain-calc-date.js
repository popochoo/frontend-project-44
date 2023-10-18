import baseLogic from "../index.js";

const dataPreparationBrainCalc = () => {
    const correctAnswer = (expression) => {
        const elements = expression.split(' ')

        switch (elements[1]) {
            case '+':
                return Number(elements[0]) + Number(elements[2]);
            case '-':
                return Number(elements[0]) - Number(elements[2]);
            case '*':
                return Number(elements[0]) * Number(elements[2])        
        };
    };

    const randomQuestion = () => {
        const operator = ['+', '-', '*'];
    
        return `${Math.round(Math.random() * 101)} ${operator[Math.floor(Math.random()*operator.length)]} ${Math.round(Math.random() * 101)}`
    };

    const rules = 'What is the result of the expression?';

    baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainCalc;