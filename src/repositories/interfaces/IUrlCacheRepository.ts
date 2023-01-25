import { Url, UrlInput, UrlOutput } from "../../models/Url"

export default interface IUrlCacheRepository {
  get(key: string): Promise<string | null>
  setEx(key: string, value: string, expirationTime: number): Promise<string | null> 
}