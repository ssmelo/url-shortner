import { Url, UrlInput, UrlOutput } from "../../models/Url"

export default interface IUrlRepository {
  createUrl(url: UrlInput): Promise<UrlOutput>
  getUrlByLongUrl(longUrl: string): Promise<string | null> 
  getUrlByShortUrl(shortUrl: string): Promise<string | null>
}