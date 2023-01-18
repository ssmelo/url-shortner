import UrlCreationDto from "../../DTOs/UrlCreationDto";
import UrlGetDto from "../../DTOs/UrlGetDto";

export default interface IUrlCreationDto {
  createShortUrl(urlCreationDto: UrlCreationDto): Promise<string>
  getLongUrl(shortURL: string): Promise<string | null>
}
