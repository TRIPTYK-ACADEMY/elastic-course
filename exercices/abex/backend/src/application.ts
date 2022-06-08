import { DatabaseService } from "./services/database.service";

async function init() {
  DatabaseService.init();
  
}

init();
