import UrlCreationDto from "../DTOs/UrlCreationDto";
import IUrlRepository from "../repositories/interfaces/IUrlRepository";
import { UrlInput } from "../models/Url";
import IUrlService from "./interfaces/IUrlService";
import IUniqueIdService from "./interfaces/IUniqueIdService";
import IUrlCacheRepository from "../repositories/interfaces/IUrlCacheRepository";

export default class UrlService implements IUrlService {
  private readonly urlRepository: IUrlRepository;
  private readonly cacheRepository: IUrlCacheRepository;
  private readonly uniqueIdService: IUniqueIdService;

  constructor(urlRepository: IUrlRepository, uniqueIdService: IUniqueIdService, cacheRepository: IUrlCacheRepository) {
    this.urlRepository = urlRepository;
    this.uniqueIdService = uniqueIdService;
    this.cacheRepository = cacheRepository;
  }

  async getLongUrl(shortURL: string): Promise<string | null> {
    const cacheUrl = await this.cacheRepository.get(shortURL);
    if(cacheUrl)
      return cacheUrl;
    
    const urlFromDatabase = await this.urlRepository.getUrlByShortUrl(shortURL);
    if(urlFromDatabase) {
      console.log(urlFromDatabase);
      await this.cacheRepository.setEx(shortURL, urlFromDatabase, 120);
    }
      
    return urlFromDatabase;
  }

  async createShortUrl(urlCreationDto: UrlCreationDto): Promise<string> {
    const existingLongURL = await this.urlRepository.getUrlByLongUrl(urlCreationDto.longURL);
    if(existingLongURL)
      return existingLongURL;

    const inputUrl: UrlInput = {
      longURL: urlCreationDto.longURL
    }
    
    const result = await this.urlRepository.createUrl(inputUrl);
    return result.shortURL;
  }
}