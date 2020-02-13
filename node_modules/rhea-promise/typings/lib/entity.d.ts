/// <reference types="node" />
import { EventEmitter } from "events";
/**
 * Abstract base class for all the entities like Connection, Session, Sender, Receiver in the
 * AMQP protocol.
 * @class Entity
 */
export declare abstract class Entity extends EventEmitter {
    /**
     * @property actionInitiated Indicates whether the action of creating or closing an entity has
     * been initiated. Whenever an action has been initiated, the count will be incremented by 1.
     * Whenever the action completes (succeeds/fails) the count will be decremented by 1.
     * Default value: `0`.
     */
    actionInitiated: number;
    constructor();
}
//# sourceMappingURL=entity.d.ts.map