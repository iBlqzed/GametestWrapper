import { runCommand } from "../utils";
import { Database } from "./Database";
export class DatabaseUtils {
    /**
     * Create a new database
     * @param {string} name The name of the database
     * @returns {Database} A new database
     */
    create(name) {
        return new Database(name);
    }
    /**
     * Delete a database
     * @param {string} databaseName Database to delete
     */
    delete(databaseName) {
        runCommand(`scoreboard objectives remove "DB_${JSON.stringify(databaseName).slice(1, -1).replaceAll(/"/g, '\\"')}"`);
    }
}
