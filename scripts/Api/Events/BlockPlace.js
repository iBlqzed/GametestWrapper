import { world } from "mojang-minecraft";
import { Player } from "../Entity/index.js";
export class BlockPlace {
    constructor() {
        /**
         * The actual arg
         */
        this.arg = undefined;
    }
    /**
     * Add a listener for the event
     */
    on(callback) {
        this.arg = world.events.blockPlace.subscribe(({ player, block }) => {
            callback({
                player: new Player(player),
                block: block
            });
        });
        return this;
    }
    /**
     * Remove the listener for the event
     */
    off() {
        world.events.blockPlace.unsubscribe(this.arg);
    }
}
