import { Recipe } from '../types';

const colomba: Recipe = {
    title: 'Pandoro farlocco',
    stages: [
        {
            label: 'Primo impasto',
            duration: {
                hours: 0,
                minutes: 40,
            },
        },
        {
            label: 'Lievitazione',
            duration: {
                hours: 8,
                minutes: 0,
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
            label: 'Lievitazione',
            duration: {
                hours: 4,
                minutes: 0,
            },
            isWait: true,
        },
        {
            label: 'Terzo impasto',
            duration: {
                hours: 1,
                minutes: 0,
            },
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
