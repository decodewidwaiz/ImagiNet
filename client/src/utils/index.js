import {surpriseMePrompts as index} from './../constants';

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * index.length);
    const randomPrompt = index[randomIndex];

    // to ensure there is no duplicate prompt
    if(randomPrompt === prompt) {
        return getRandomPrompt(prompt);
    }

    return randomPrompt;
}