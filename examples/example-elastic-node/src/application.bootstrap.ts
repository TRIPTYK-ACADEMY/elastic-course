import { Client } from "@elastic/elasticsearch";
import { readFileSync } from "fs";

async function init() {
  const client = new Client({
    node: "https://localhost:9200",
    tls: {
      ca: readFileSync("http_ca.crt", "utf-8"),
    },
    auth: {
      apiKey: "S2toSlFvRUJCX1VTc3dNNW9TcXU6U19FUXJQSE9UTFdJWWZwQTV3Y1psdw==",
    },
  });

  const health  = await client.cluster.health();

  console.log(health);
}

init();