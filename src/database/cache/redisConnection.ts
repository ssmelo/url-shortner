import { createClient} from "redis";
export type RedisClientType = ReturnType<typeof createClient>;

async function createRedisConnection(): Promise<RedisClientType> {
  const client = createClient();
  await client.connect();

  client.on("error", (error: any) => {
    console.error(error);
  });

  return client;
}

export default createRedisConnection;
