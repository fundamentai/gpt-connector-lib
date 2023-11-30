import { SessionAxios } from 'backend-helper-kit';
import * as inputHistory from './types/history/input-type';
import * as outputHistory from './types/history/output-type';
import * as inputOpenAi from './types/openai/input-type';
import * as outputOpenAi from './types/openai/output-type';
type params = {
    baseUrl: string;
    apiKey: string;
};
export declare class GPTConnector {
    session: SessionAxios;
    apiKey: string;
    constructor(config: params);
    sendMessageToHistory(data: inputHistory.sendMessage): Promise<outputHistory.sendMessage>;
    getMessages(data: inputHistory.getMessages): Promise<outputHistory.getMessages>;
    sendMessageToAssistant(data: inputOpenAi.completion): Promise<outputOpenAi.completion>;
    newRelatedHistories(data: inputHistory.newRelatedHistories): Promise<outputHistory.newRelatedHistories>;
    deleteRelatedHistories(data: inputHistory.deleteRelatedHistory): Promise<outputHistory.deleteRelatedHistory>;
    addRelatedHistory(data: inputHistory.addRelatedHistory): Promise<outputHistory.addRelatedHistory>;
    newHistory(data: inputHistory.newHistory): Promise<outputHistory.newHistory>;
}
export {};
