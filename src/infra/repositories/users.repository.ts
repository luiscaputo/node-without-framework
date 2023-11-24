import { ConnectToDatabase } from "../database/connection";

export class DatabaseRepository {
  async execute(query: string) {
    return ConnectToDatabase.query(query);
  }

/*
* Added Othe specific methods
*/

}