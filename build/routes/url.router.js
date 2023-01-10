"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UrlsController_1 = __importDefault(require("../controllers/UrlsController"));
const serviceFactory_1 = require("../factories/serviceFactory");
/**
 * Router Definition
 */
const router = express_1.default.Router();
const urlsController = new UrlsController_1.default(serviceFactory_1.urlService);
console.log(serviceFactory_1.urlService);
router.post('/shorten', urlsController.createShortUrl);
// router.post('api/v1/shortUrl/shorten',)
exports.default = router;
