export interface completion {
    body: {
        apiKey?: string;
        historyId?: string;
        message: {
            content: string;
            date?: Date;
            role: 'function' | 'user' | 'system' | 'assistant';
        };
        openai?: {
            frequency_penalty?: number;
            function_call?: object;
            functions?: string[];
            logit_bias?: object;
            max_tokens?: number;
            model?: string;
            n?: number;
            presence_penalty?: number;
            stop?: object;
            stream?: boolean;
            temperature?: number;
            top_p?: number;
            user?: string;
        };
    };
    query: {
        historyId?: string;
        relatedId?: string;
    };
    user?: {
        permissions?: any;
    };
}
