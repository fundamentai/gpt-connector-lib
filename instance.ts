import { SessionAxios } from 'backend-helper-kit'

import * as inputHistory from './types/history/input-type'
import * as outputHistory from './types/history/output-type'

import * as inputOpenAi from './types/openai/input-type'
import * as outputOpenAi from './types/openai/output-type'

type params = {
    baseUrl: string
    apiKey: string
}

export class GPTConnector {
    session: SessionAxios
    apiKey: string

    constructor(config: params) {
        this.session = new SessionAxios({
            baseURL: config.baseUrl
        })

        this.apiKey = config.apiKey
    }

    async sendMessageToHistory(data: inputHistory.sendMessage): Promise<outputHistory.sendMessage> {
        return (
            await this.session.request({
                url: '/history/send-message',
                method: 'POST',
                data: data.body,
                params: data.query
            })
        ).data
    }

    async getMessages(data: inputHistory.getMessages): Promise<outputHistory.getMessages> {
        return (
            await this.session.request({
                url: '/history/messages',
                method: 'GET',
                params: data.query
            })
        ).data
    }

    async sendMessageToAssistant(data: inputOpenAi.completion): Promise<outputOpenAi.completion> {
        data.body.apiKey = this.apiKey

        return (
            await this.session.request({
                url: '/chat/completion',
                method: 'POST',
                data: data.body,
                params: data.query
            })
        ).data
    }

    async newRelatedHistories(data: inputHistory.newRelatedHistories): Promise<outputHistory.newRelatedHistories> {
        return (
            await this.session.request({
                url: '/history/related',
                method: 'POST',
                data: data.body,
                params: data.query
            })
        ).data
    }

    async deleteRelatedHistories(data: inputHistory.deleteRelatedHistory): Promise<outputHistory.deleteRelatedHistory> {
        return (
            await this.session.request({
                url: '/history/related',
                method: 'DELETE',
                params: data.query
            })
        ).data
    }

    async addRelatedHistory(data: inputHistory.addRelatedHistory): Promise<outputHistory.addRelatedHistory> {
        return (
            await this.session.request({
                url: '/history/related',
                method: 'PUT',
                data: data.body,
                params: data.query
            })
        ).data
    }

    async newHistory(data: inputHistory.newHistory): Promise<outputHistory.newHistory> {
        return (
            await this.session.request({
                url: '/history/',
                method: 'POST',
                data: data.body,
                params: data.query
            })
        ).data
    }
}
