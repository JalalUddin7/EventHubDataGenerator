"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the Apache License. See License in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const debugModule = require("debug");
/**
 * @ignore
 * log statements for container
 */
exports.container = debugModule("rhea-promise:container");
/**
 * @ignore
 * log statements for connection
 */
exports.connection = debugModule("rhea-promise:connection");
/**
 * @ignore
 * log statements for session
 */
exports.session = debugModule("rhea-promise:session");
/**
 * @ignore
 * log statements for sender
 */
exports.sender = debugModule("rhea-promise:sender");
/**
 * @ignore
 * log statements for receiver
 */
exports.receiver = debugModule("rhea-promise:receiver");
/**
 * @ignore
 * log statements for error
 */
exports.error = debugModule("rhea-promise:error");
/**
 * @ignore
 * log statements for error
 */
exports.eventHandler = debugModule("rhea-promise:eventhandler");
/**
 * @ignore
 * log statements for error
 */
exports.contextTranslator = debugModule("rhea-promise:translate");
//# sourceMappingURL=log.js.map