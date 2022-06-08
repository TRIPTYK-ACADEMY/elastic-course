import { Client } from "@elastic/elasticsearch";
import { readFileSync } from "fs";

export class DatabaseService {
    public static _client?: Client;

    public static async init() {
        const client = new Client({
            node: "https://localhost:9200",
            auth: {
              // use base64 api key
              apiKey: "eV9NX09JRUJQdzk2bXRYUlAzNkM6ai03T3BmRFlRYWlGd3NUQnBIOWhNZw==",
            },
            maxRetries: 5,
            tls: {
              // load the cert
              ca: readFileSync("certs/http_ca.crt"),
            },
            requestTimeout: 6000,
            sniffOnStart: true,
          });

         await client.ping();
        return this._client = client;
        
    }
}