"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GPTConnector = void 0;
const backend_helper_kit_1 = require("backend-helper-kit");
class GPTConnector {
    constructor(config) {
        this.session = new backend_helper_kit_1.SessionAxios({
            baseURL: config.baseUrl
        });
        this.apiKey = config.apiKey;
    }
    sendMessageToHistory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.session.request({
                url: '/history/send-message',
                method: 'POST',
                data: data.body,
                params: data.query
            })).data;
        });
    }
    getMessages(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.session.request({
                url: '/history/messages',
                method: 'GET',
                params: data.query
            })).data;
        });
    }
    sendMessageToAssistant(data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.body.apiKey = this.apiKey;
            return (yield this.session.request({
                url: '/chat/completion',
                method: 'POST',
                data: data.body,
                params: data.query
            })).data;
        });
    }
    newRelatedHistories(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.session.request({
                url: '/history/related',
                method: 'POST',
                data: data.body,
                params: data.query
            })).data;
        });
    }
    deleteRelatedHistories(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.session.request({
                url: '/history/related',
                method: 'DELETE',
                params: data.query
            })).data;
        });
    }
    addRelatedHistory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.session.request({
                url: '/history/related',
                method: 'PUT',
                data: data.body,
                params: data.query
            })).data;
        });
    }
    newHistory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.session.request({
                url: '/history/',
                method: 'POST',
                data: data.body,
                params: data.query
            })).data;
        });
    }
}
exports.GPTConnector = GPTConnector;
//# sourceMappingURL=instance.js.map