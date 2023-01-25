import { RedisClientType } from "../database/cache/redisConnection";
import IUrlCacheRepository from "./interfaces/IUrlCacheRepository";

export default class UrlCacheRepository implements IUrlCacheRepository {

  private readonly conn: RedisClientType;

  constructor(conn: RedisClientType) {
    this.conn = conn;
  }

  async get(key: string): Promise<string | null> {
    return await this.conn.get(key);
  }
  
  async setEx(key: string, value: string, expirationTime: number): Promise<string> {
    return await this.conn.setEx(key, expirationTime, value);
  }

}