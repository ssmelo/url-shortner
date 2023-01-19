import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../DTOs/ErrorResponse";
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

  async getLongUrl(request: Request, response: Response, next: NextFunction) {
    const url = await this.urlService.getLongUrl(request.params.shortURL)
    
    if(!url)
      return next(new ErrorResponse(`LongURL doesn't exist for this shortURL: ${request.params.shortURL}`, 404));
      
    return response.json({ success: true, data: url }).status(200);
  }
}