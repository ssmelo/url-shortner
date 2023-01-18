import { Request, Response } from "express";
import IUrlService from "../services/interfaces/IUrlService";


export default class UrlsController {
  private readonly urlService: IUrlService;

  constructor(urlService: IUrlService) {
    this.urlService = urlService;
  }

  async createShortUrl(request: Request, response: Response) {
    const url = await this.urlService.createShortUrl(request.body)
    return response.json({ url }).status(200);
  }

  async getLongUrl(request: Request, response: Response) {
    const url = await this.urlService.getLongUrl(request.params.shortURL)
    return response.json({ url }).status(200);
  }
}