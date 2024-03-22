export type Duration = {
    hours: number;
    minutes: number;
};

export type Stage = {
    label: string;
    duration: Duration;
    isWait?: boolean;
};

export type Recipe = {
    title: string;
    stages: Stage[];
};
