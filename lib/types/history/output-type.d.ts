export type addRelatedHistory = boolean;
export type deleteRelatedHistory = boolean;
export type getMessages = {
    content: string;
    date?: Date;
    role: 'function' | 'user' | 'system' | 'assistant';
}[];
export type newHistory = string;
export type newRelatedHistories = string | boolean;
export type sendMessage = string | boolean;
