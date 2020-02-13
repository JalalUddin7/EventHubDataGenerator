"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the Apache License. See License in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
/**
 * Abstract base class for all the entities like Connection, Session, Sender, Receiver in the
 * AMQP protocol.
 * @class Entity
 */
class Entity extends events_1.EventEmitter {
    constructor() {
        super();
        /**
         * @property actionInitiated Indicates whether the action of creating or closing an entity has
         * been initiated. Whenever an action has been initiated, the count will be incremented by 1.
         * Whenever the action completes (succeeds/fails) the count will be decremented by 1.
         * Default value: `0`.
         */
        this.actionInitiated = 0;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map