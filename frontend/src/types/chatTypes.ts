export * from './chatTypes.ts';

export interface Message {
    text: string,
    sender: "user" | "bot";
}

