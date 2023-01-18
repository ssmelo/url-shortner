import { Model, Sequelize, where } from "sequelize";
import { Url, UrlInput, UrlOutput } from "../models/Url";
import IUrlRepository from "./interfaces/IUrlRepository";

export default class UrlRepository implements IUrlRepository {

  async createUrl(url: UrlInput): Promise<UrlOutput> {
    return await Url.create(url);
  }
  getUrlByLongUrl(longUrl: Url): Promise<Url> {
    throw new Error("Method not implemented.");
  }
  async getUrlByShortUrl(shortURL: string): Promise<string | null> {
    const url = await Url.findOne({
      where: {
        shortURL: shortURL
      },
      attributes: [
        "longURL"
      ]
    });

    if(url != null) {
      return url.longURL;
    }

    return null;
  }
  
}