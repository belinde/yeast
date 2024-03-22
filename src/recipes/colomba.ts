import { Recipe } from '../types';

const colomba: Recipe = {
    title: 'Colomba',
    stages: [
        {
            label: 'Primo impasto',
            duration: {
                hours: 0,
                minutes: 20,
            },
        },
        {
            label: 'Lievitazione',
            duration: {
                hours: 10,
                minutes: 40,
            },
            isWait: true,
        },
        {
            label: 'Secondo impasto',
            duration: {
                hours: 0,
                minutes: 45,
            },
        },
        {
            label: 'Riposo e messa in forma',
            duration: {
                hours: 1,
                minutes: 0,
            },
            isWait: true,
        },
        {
            label: 'Lievitazione',
            duration: {
                hours: 4,
                minutes: 30,
            },
            isWait: true,
        },

        {
            label: 'Cottura',
            duration: {
                hours: 1,
                minutes: 0,
            },
        },
    ],
};

export default colomba;
