export enum Difficulty  {
    EASY = 'легко',
    MEDIUM = 'средне',
    HARD = 'тяжело'
}
export type Question = {
    category: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
    question:string;
    type:string;
}
export type QuestionsState = Array<Question & { answers: Array<string>}> ;