import UrlRepository from "../repositories/UrlRepository";
import UniqueIdService from "../services/UniqueIdService";
import UrlService from "../services/UrlService";

const urlRepository = new UrlRepository();
const uniqueIdService = new UniqueIdService();
const urlService = new UrlService(urlRepository, uniqueIdService);
export default urlService;



