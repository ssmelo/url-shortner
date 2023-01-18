import { Url, UrlInput, UrlOutput } from "../../models/Url"

export default interface IUrlRepository {
  createUrl(url: UrlInput): Promise<UrlOutput>
  getUrlByLongUrl(longUrl: Url): Promise<Url> 
  getUrlByShortUrl(shortUrl: string): Promise<string | null>
}