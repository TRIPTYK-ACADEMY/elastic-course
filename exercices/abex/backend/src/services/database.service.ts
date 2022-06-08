import { Client } from "@elastic/elasticsearch";
import { readFileSync } from "fs";

export class DatabaseService {
  public static _client?: Client;

  public static get client() {
      return this._client;
  }

  public static async init() {
    const client = new Client({
      node: "https://localhost:9200",
      auth: {
        // use base64 api key
        apiKey: "dDNrM1E0RUJkM3dsVHgzMzZiV2s6MTUzMG1yb1VSaDJ5YXA3clRBMTEyQQ==",
      },
      tls: {
        // load the cert
        ca: readFileSync("certs/http_ca.crt"),
      },
      requestTimeout: 500
    });

    await client.ping();
    console.log("Connected to database");
    return (this._client = client);
  }
}
