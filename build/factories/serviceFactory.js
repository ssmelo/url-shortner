"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlService = void 0;
const UrlRepository_1 = __importDefault(require("../repositories/UrlRepository"));
const UniqueIdService_1 = __importDefault(require("../services/UniqueIdService"));
const UrlService_1 = __importDefault(require("../services/UrlService"));
const urlRepository = new UrlRepository_1.default();
const uniqueIdService = new UniqueIdService_1.default();
const urlService = new UrlService_1.default(urlRepository, uniqueIdService);
exports.urlService = urlService;
