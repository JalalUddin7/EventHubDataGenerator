"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the Apache License. See License in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("./link");
/**
 * Describes the receiver that wraps the rhea receiver.
 * @class Receiver.
 */
class Receiver extends link_1.Link {
    constructor(session, receiver, options) {
        super(link_1.LinkType.receiver, session, receiver, options);
    }
    get drain() {
        return this._link.drain;
    }
    set drain(value) {
        this._link.drain = value;
    }
    addCredit(credit) {
        this._link.add_credit(credit);
    }
    setCreditWindow(creditWindow) {
        this._link.set_credit_window(creditWindow);
    }
}
exports.Receiver = Receiver;
//# sourceMappingURL=receiver.js.map