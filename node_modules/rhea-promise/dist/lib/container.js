"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the Apache License. See License in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const rhea_1 = require("rhea");
const events_1 = require("events");
const connection_1 = require("./connection");
/**
 * An AMQP container from which outgoing connections can be made and/or
 * to which incoming connections can be accepted.
 * @class Container
 */
class Container extends events_1.EventEmitter {
    constructor(options) {
        if (!options)
            options = {};
        super();
        if (options.createdInstance) {
            this._container = options.createdInstance;
            delete options.createdInstance;
        }
        else {
            this._container = rhea_1.create_container(options);
        }
        this.options = this._container.options;
    }
    get id() {
        return this._container.id;
    }
    get filter() {
        return this._container.filter;
    }
    get types() {
        return this._container.types;
    }
    get message() {
        return this._container.message;
    }
    get sasl() {
        return this._container.sasl;
    }
    get saslServerMechanisms() {
        return this._container.sasl_server_mechanisms;
    }
    createConnection(options) {
        const rheaConnection = this._container.create_connection(options);
        return new connection_1.Connection({ rheaConnection: rheaConnection, container: this });
    }
    connect(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.createConnection(options).open();
        });
    }
    listen(options) {
        return this._container.listen(options);
    }
    generateUUid() {
        return this._container.generate_uuid();
    }
    stringToUuid(uuidString) {
        return this._container.string_to_uuid(uuidString);
    }
    uuidToString(buffer) {
        return this._container.uuid_to_string(buffer);
    }
    websocketAccept(socket, options) {
        return this._container.websocket_accept(socket, options);
    }
    websocketConnect(impl) {
        return this._container.websocket_connect(impl);
    }
    static create(options) {
        return new Container(options);
    }
    static copyFromContainerInstance(instance) {
        return new Container({ createdInstance: instance });
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map