import createRedisConnection from "../database/cache/redisConnection";
import UrlCacheRepository from "../repositories/UrlCacheRepository";

async function getRedisRepository() {
  const conn = await createRedisConnection();
  return new UrlCacheRepository(conn);
}
export default getRedisRepository