import UrlCreationDto from "../../DTOs/UrlCreationDto";

export default interface IUrlCreationDto {
  createShortUrl(urlCreationDto: UrlCreationDto): Promise<string>
}
