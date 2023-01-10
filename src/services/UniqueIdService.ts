import { Snowflake } from "nodejs-snowflake";
import IUniqueIdService from "./interfaces/IUniqueIdService";
import * as dotenv from "dotenv";
dotenv.config({ path: "./config/.env"});

export default class UniqueIdService implements IUniqueIdService{
  generateUniqueId(): BigInt {
    const uid = new Snowflake({
      custom_epoch: Number(process.env.CUSTOM_EPOCH),
      instance_id: Number(process.env.INSTANCE_ID)
    });

    return uid.getUniqueID(); // A 64 bit id is returned
  }
  
}