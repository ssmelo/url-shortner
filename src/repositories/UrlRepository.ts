import { Model, Sequelize } from "sequelize";
import { Url, UrlInput, UrlOutput } from "../models/Url";
import IUrlRepository from "./interfaces/IUrlRepository";

export default class UrlRepository implements IUrlRepository {

  async createUrl(url: UrlInput): Promise<UrlOutput> {
    return await Url.create(url);
  }
  getUrlByLongUrl(longUrl: Url): Promise<Url> {
    throw new Error("Method not implemented.");
  }
  getUrlByShortUrl(shortUrl: Url): Promise<Url> {
    throw new Error("Method not implemented.");
  }
  
}