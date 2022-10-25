import * as React from 'react';
import type { DocumentUri, Position, Range, TextDocumentPositionParams } from 'vscode-languageserver-protocol';
import { Event } from './event';
/** A document URI and a position in that document. */
export interface DocumentPosition extends Position {
    uri: DocumentUri;
}
export declare namespace DocumentPosition {
    function isEqual(p1: DocumentPosition, p2: DocumentPosition): boolean;
    function toTdpp(p: DocumentPosition): TextDocumentPositionParams;
    function toString(p: DocumentPosition): string;
}
export declare namespace PositionHelpers {
    function isLessThanOrEqual(p1: Position, p2: Position): boolean;
}
export declare namespace RangeHelpers {
    function contains(range: Range, pos: Position, ignoreCharacter?: boolean): boolean;
}
export declare function escapeHtml(s: string): string;
/** @deprecated (unused) */
export declare function colorizeMessage(goal: string): string;
export declare function basename(path: string): string;
/** Like {@link React.useEffect} but subscribes to `ev` firing. */
export declare function useEvent<T>(ev: Event<T>, f: (_: T) => void, dependencies?: React.DependencyList): void;
export declare function useEventResult<T>(ev: Event<T>): T | undefined;
export declare function useEventResult<T, S>(ev: Event<S>, map: (newVal: S | undefined, prev: T | undefined) => T): T;
export declare function useServerNotificationEffect<T>(method: string, f: (params: T) => void, deps?: React.DependencyList): void;
/**
 * Returns the same tuple as `setState` such that whenever a server notification with `method`
 * arrives at the editor, the state will be updated according to `f`.
 */
export declare function useServerNotificationState<S, T>(method: string, initial: S, f: (params: T) => Promise<(state: S) => S>, deps?: React.DependencyList): [S, React.Dispatch<React.SetStateAction<S>>];
export declare function useClientNotificationEffect<T>(method: string, f: (params: T) => void, deps?: React.DependencyList): void;
/**
 * Like {@link useServerNotificationState} but for client->server notifications sent by the editor.
 */
export declare function useClientNotificationState<S, T>(method: string, initial: S, f: (state: S, params: T) => S, deps?: React.DependencyList): [S, React.Dispatch<React.SetStateAction<S>>];
/**
 * Returns `[isPaused, setPaused, tPausable, tRef]` s.t.
 * - `[isPaused, setPaused]` are the paused status state
 * - for as long as `isPaused` is set, `tPausable` holds its initial value (the `t` passed before pausing)
 *   rather than updates with changes to `t`.
 * - `tRef` can be used to overwrite the paused state
 *
 * To pause child components, `startPaused` can be passed in their props.
 */
export declare function usePausableState<T>(startPaused: boolean, t: T): [boolean, React.Dispatch<React.SetStateAction<boolean>>, T, React.MutableRefObject<T>];
/**
 * Returns a stateful log string and a function to update it.
 */
export declare function useLogState(): [string, (...msg: any[]) => void];
export declare type Keyed<T> = T & {
    key: string;
};
/**
 * Adds a unique `key` property to each element in `elems` using
 * the values of (possibly non-injective) `getId`.
 */
export declare function addUniqueKeys<T>(elems: T[], getId: (el: T) => string): Keyed<T>[];
/** Like `React.forwardRef`, but also allows using the ref inside the forwarding component.
 * Adapted from https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd */
export declare function forwardAndUseRef<T, P = {}>(render: (props: React.PropsWithChildren<P>, ref: React.RefObject<T>, setRef: (_: T | null) => void) => React.ReactElement | null): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;
export interface LogicalDomTraverser {
    contains(el: Node): boolean;
}
export interface LogicalDomStorage {
    registerDescendant(el: HTMLElement | null): () => void;
}
export declare const LogicalDomContext: React.Context<LogicalDomStorage>;
/** Suppose a component B appears as a React child of the component A. For layout reasons,
 * we sometimes don't want B to appear as an actual child of A in the DOM. We may still however
 * want to carry out `contains` checks as if B were there, i.e. according to the React tree
 * structure rather than the DOM structure. Logical DOM nodes make this work. Note this is not
 * shadow DOM, although it is similar.
 *
 * For the method to work, each component introducing a *logical* (React-but-not-DOM) child must
 * register it in the `LogicalDomContext`.
 *
 * To carry out checks, call `useLogicalDom` with a ref to the node for which you want to carry
 * out `contains` checks and wrap that node in a `LogicalDomContext` using the resulting
 * `LogicalDomStorage`. */
export declare function useLogicalDom(ref: React.RefObject<HTMLElement>): [LogicalDomTraverser, LogicalDomStorage];
/** Sends an exception object to a throwable error.
 * Maps JSON Rpc errors to throwable errors.
 */
export declare function mapRpcError(err: unknown): Error;
/** Catch handler for RPC methods that just returns undefined if the method is not found.
 * This is useful for compatibility with versions of Lean that do not yet have the given RPC method.
*/
export declare function discardMethodNotFound(e: unknown): undefined;
export declare type AsyncState<T> = {
    state: 'loading';
} | {
    state: 'resolved';
    value: T;
} | {
    state: 'rejected';
    error: any;
};
export declare type AsyncWithTriggerState<T> = {
    state: 'notStarted';
} | AsyncState<T>;
export declare function useAsyncWithTrigger<T>(fn: () => Promise<T>, deps?: React.DependencyList): [AsyncWithTriggerState<T>, () => void];
/** This React hook will run the given promise function `fn` whenever the deps change
 * and use it to update the status and result when the promise resolves.
 *
 * This function prevents race conditions if the requests resolve in a
 * different order to that which they were requested in:
 *
 * - Request 1 is sent with, say, line=42.
 * - Request 2 is sent with line=90.
 * - Request 2 returns with diags=[].
 * - Request 1 returns with diags=['error'].
 *
 * Without `useAsync` we would now return the diagnostics for line 42 even though we're at line 90.
 *
 * When the deps change, the function immediately returns `{ state: 'loading' }`.
 */
export declare function useAsync<T>(fn: () => Promise<T>, deps?: React.DependencyList): AsyncState<T>;
