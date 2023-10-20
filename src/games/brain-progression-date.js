import baseLogic from "../index.js";

const dataPreparationBrainProgression = () => {
    const correctAnswer = (progression) => {
        const listProgression = progression.split(' ');
        let correctNumber = 0;

        for (const i of listProgression) {
            if (i === '..') {
                let leftElement = listProgression.indexOf(i) - 1;
                let rightElement = listProgression.indexOf(i) + 1;

                correctNumber = Number(listProgression[leftElement]) + ((Number(listProgression[rightElement]) - Number(listProgression[leftElement])) / 2);
            }
        }

        return correctNumber.toString();
    };

    const randomQuestion = () => {
        const lengthProgression = Math.floor(Math.random() * 10) + 10;
        let seedNumber = Math.floor(Math.random() * 20) + 1;
        const fixedIncrease = Math.floor(Math.random() * 20) + 2;
        const numberToReplace = Math.floor(Math.random() * (9 - 1) + 1);

        const listProgression = [];
        listProgression.push(seedNumber.toString());

        for (let i = 0; i < lengthProgression; i++) {
            if (i === numberToReplace) {
                seedNumber += fixedIncrease;
                listProgression.push('..');
            } else {
                seedNumber += fixedIncrease;
                listProgression.push(seedNumber.toString());
            };
        };

        return listProgression.join(' ');
    };

    const rules = 'What number is missing in the progression?';

    baseLogic(rules, randomQuestion, correctAnswer);
};

export default dataPreparationBrainProgression;