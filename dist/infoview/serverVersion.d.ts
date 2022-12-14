/**
 * Keeps track of the Lean server version and available features.
 * @module
 */
export declare class ServerVersion {
    major: number;
    minor: number;
    patch: number;
    constructor(version: string);
    /** Supports the first version of the widget RPC protocol. */
    hasWidgetsV1(): boolean;
}
