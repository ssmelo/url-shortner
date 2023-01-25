import express from "express";
import "express-async-errors"
import UrlsController from "../controllers/UrlsController";
import getUrlService from "../factories/serviceFactory";

/**
 * Router Definition
 */

const router = express.Router();

(async () => {
  const urlsController = new UrlsController(await getUrlService());

  router.get('/:shortURL', urlsController.getLongUrl.bind(urlsController));
  router.post('/shorten', urlsController.createShortUrl.bind(urlsController));
})();

export default router;