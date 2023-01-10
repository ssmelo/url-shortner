import { Request, Response } from "express";
import IUrlService from "../services/interfaces/IUrlService";


export default class UrlsController {
  private readonly urlService: IUrlService;

  constructor(urlService: IUrlService) {
    this.urlService = urlService;
  }

  async createShortUrl(request: Request, response: Response) {
    const url = await this.urlService.createShortUrl(request.body)
    // const url = await (new UrlService(new UrlRepository(), new UniqueIdService()).createShortUrl(request.body));
    return response.json({ url }).status(200);
  }
}