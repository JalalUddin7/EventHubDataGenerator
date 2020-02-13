/// <reference types="node" />
import { Container as RheaContainer, ContainerOptions as ContainerOptionsBase, Filter, Types, MessageUtil, Sasl } from "rhea";
import { EventEmitter } from "events";
import { ConnectionOptions, Connection } from './connection';
import { TlsOptions, Server as TlsServer, ConnectionOptions as TlsConnectionOptions } from "tls";
import { ListenOptions, Server, Socket } from "net";
/**
 * Descibes the options that can be provided while creating the Container.
 * @interface ContainerOptions
 */
export interface ContainerOptions extends ContainerOptionsBase {
    createdInstance?: RheaContainer;
}
/**
 * An AMQP container from which outgoing connections can be made and/or
 * to which incoming connections can be accepted.
 * @class Container
 */
export declare class Container extends EventEmitter {
    /**
     * @property {options} ContainerOptions Container options.
     */
    options: ContainerOptions;
    /**
     * @property {RheaContainer} _container The underlying container object from rhea.
     * @private
     */
    private _container;
    constructor(options?: ContainerOptions);
    readonly id: string;
    readonly filter: Filter;
    readonly types: Types;
    readonly message: MessageUtil;
    readonly sasl: Sasl;
    readonly saslServerMechanisms: any;
    createConnection(options?: ConnectionOptions): Connection;
    connect(options?: ConnectionOptions): Promise<Connection>;
    listen(options: ListenOptions | TlsOptions): Server | TlsServer;
    generateUUid(): string;
    stringToUuid(uuidString: string): Buffer;
    uuidToString(buffer: Buffer): string;
    websocketAccept(socket: Socket, options: TlsConnectionOptions): void;
    websocketConnect(impl: any): any;
    static create(options?: ContainerOptionsBase): Container;
    static copyFromContainerInstance(instance: RheaContainer): Container;
}
//# sourceMappingURL=container.d.ts.map