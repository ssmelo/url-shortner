import express from "express";
import UrlsController from "../controllers/UrlsController";
import urlService from "../factories/serviceFactory";

/**
 * Router Definition
 */

const router = express.Router();

const urlsController = new UrlsController(urlService);

router.get('/:shortURL', urlsController.getLongUrl.bind(urlsController));
router.post('/shorten', urlsController.createShortUrl.bind(urlsController));

export default router;