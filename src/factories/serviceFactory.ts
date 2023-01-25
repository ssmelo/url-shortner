import UrlRepository from "../repositories/UrlRepository";
import UniqueIdService from "../services/UniqueIdService";
import UrlService from "../services/UrlService";
import getRedisRepository from "./redisRepositoryFactory";

async function getUrlService() {
  const urlRepository = new UrlRepository();
  const uniqueIdService = new UniqueIdService();
  const cacheRepository = await getRedisRepository();
  return new UrlService(urlRepository, uniqueIdService, cacheRepository);
}

export default getUrlService;




