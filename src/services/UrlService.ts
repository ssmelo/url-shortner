import UrlCreationDto from "../DTOs/UrlCreationDto";
import IUrlRepository from "../repositories/interfaces/IUrlRepository";
import { UrlInput } from "../models/Url";
import IUrlService from "./interfaces/IUrlService";
import IUniqueIdService from "./interfaces/IUniqueIdService";
import UniqueIdService from "./UniqueIdService";
import UrlGetDto from "../DTOs/UrlGetDto";

export default class UrlService implements IUrlService {
  private readonly urlRepository: IUrlRepository;
  private readonly uniqueIdService: IUniqueIdService;

  constructor(urlRepository: IUrlRepository, uniqueIdService: IUniqueIdService) {
    this.urlRepository = urlRepository;
    this.uniqueIdService = uniqueIdService;
  }

  async getLongUrl(shortURL: string): Promise<string | null> {
    return await this.urlRepository.getUrlByShortUrl(shortURL);
  }

  async createShortUrl(urlCreationDto: UrlCreationDto): Promise<string> {
    const inputUrl: UrlInput = {
      longURL: urlCreationDto.longURL
    }
    
    const result = await this.urlRepository.createUrl(inputUrl);
    return result.shortURL;
  }
}