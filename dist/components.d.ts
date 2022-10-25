/// <reference types="react" />
import { MessageData } from '@leanprover/infoview-api';
export * from '@leanprover/infoview-api';
export * from './infoview/util';
export { EditorContext, VersionContext } from './infoview/contexts';
export { EditorConnection } from './infoview/editorConnection';
export { RpcContext } from './infoview/rpcSessions';
export { ServerVersion } from './infoview/serverVersion';
export { InteractiveCode, InteractiveCodeProps } from './infoview/interactiveCode';
/** Display the given message data as interactive, pretty-printed text. */
export declare function InteractiveMessageData({ msg }: {
    msg: MessageData;
}): JSX.Element;
