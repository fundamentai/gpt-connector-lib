export interface base {
    body: object;
    query: {
        id?: string;
    };
    user?: {
        permissions?: any;
    };
}
export interface history {
    messages: {
        content: string;
        date?: Date;
        role: 'function' | 'user' | 'system' | 'assistant';
    }[];
}
export interface message {
    content: string;
    date?: Date;
    role: 'function' | 'user' | 'system' | 'assistant';
}
export interface relatedHistories {
    histories: string[];
}
