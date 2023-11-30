import { GPTConnector } from './instance'

const connector = new GPTConnector({
    baseUrl: 'http://localhost:8000',
    apiKey: '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'
})

connector
    .getMessages({
        query: {
            historyId: '64d9c9998f0ad4f3c97e7cc1'
        },
        body: {}
    })
    .then(console.log)

connector
    .sendMessageToAssistant({
        query: {
            historyId: '64d9c9998f0ad4f3c97e7cc1'
        },
        body: {
            message: {
                content: 'Hello',
                role: 'user'
            }
        }
    })
    .then((data) => {
        console.log(data.result.choices)
    })
    .catch((e) => {
        console.log(e.response.data)
    })
