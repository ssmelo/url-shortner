import { Model, Sequelize, where } from "sequelize";
import { Url, UrlInput, UrlOutput } from "../models/Url";
import IUrlRepository from "./interfaces/IUrlRepository";

export default class UrlRepository implements IUrlRepository {

  async createUrl(url: UrlInput): Promise<UrlOutput> {
    return await Url.create(url);
  }

  async getUrlByLongUrl(longUrl: string): Promise<string | null> {
    const existingLongURL = await Url.findOne({
      where: {
        longURL: longUrl
      },
      attributes: [
        "shortURL"
      ]
    });

    if(existingLongURL)
      return existingLongURL.shortURL;

    return null;
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

    if(url) {
      return url.longURL;
    }

    return null;
  }
  
}