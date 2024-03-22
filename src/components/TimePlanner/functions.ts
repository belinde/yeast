export const durationToPixel = (hours: number, minutes: number) =>
    hours * 120 + minutes * 2;
export const numToAlphabet = (n: number) =>
    String.fromCharCode(64 + n).toUpperCase();
