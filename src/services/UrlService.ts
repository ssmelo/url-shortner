import UrlCreationDto from "../DTOs/UrlCreationDto";
import IUrlRepository from "../repositories/interfaces/IUrlRepository";
import { UrlInput } from "../models/Url";
import IUrlService from "./interfaces/IUrlService";
import IUniqueIdService from "./interfaces/IUniqueIdService";
import UniqueIdService from "./UniqueIdService";

export default class UrlService implements IUrlService {
  private readonly urlRepository: IUrlRepository;
  private readonly uniqueIdService: IUniqueIdService;

  constructor(urlRepository: IUrlRepository, uniqueIdService: IUniqueIdService) {
    this.urlRepository = urlRepository;
    this.uniqueIdService = uniqueIdService;
  }

  async createShortUrl(urlCreationDto: UrlCreationDto): Promise<string> {
    const inputUrl: UrlInput = {
      longURL: urlCreationDto.longURL
    }
    
    await this.urlRepository.createUrl(inputUrl);
    return "";
  }
}