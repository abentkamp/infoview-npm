/// <reference types="react" />
import { CodeWithInfos, TaggedText } from '@leanprover/infoview-api';
export interface InteractiveTextComponentProps<T> {
    fmt: TaggedText<T>;
}
export interface InteractiveTagProps<T> extends InteractiveTextComponentProps<T> {
    tag: T;
}
export interface InteractiveTaggedTextProps<T> extends InteractiveTextComponentProps<T> {
    InnerTagUi: (_: InteractiveTagProps<T>) => JSX.Element;
}
/**
 * Core loop to display `TaggedText` objects. Invokes `InnerTagUi` on `tag` nodes in order to support
 * various embedded information such as `InfoTree`s and `Expr`s.
 * */
export declare function InteractiveTaggedText<T>({ fmt, InnerTagUi }: InteractiveTaggedTextProps<T>): JSX.Element;
export interface InteractiveCodeProps {
    fmt: CodeWithInfos;
}
/** Displays a {@link CodeWithInfos} obtained via RPC from the Lean server. */
export declare function InteractiveCode({ fmt }: InteractiveCodeProps): JSX.Element;
