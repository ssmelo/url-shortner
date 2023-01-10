import express from "express";
import UrlsController from "../controllers/UrlsController";
import urlService from "../factories/serviceFactory";

/**
 * Router Definition
 */

const router = express.Router();

const urlsController = new UrlsController(urlService);

router.post('/shorten', urlsController.createShortUrl.bind(urlsController));
// router.post('api/v1/shortUrl/shorten',)

export default router;