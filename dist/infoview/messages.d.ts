import * as React from 'react';
import { DocumentUri, Diagnostic } from 'vscode-languageserver-protocol';
import { RpcSessionAtPos } from '@leanprover/infoview-api';
import { InteractiveDiagnostic } from '@leanprover/infoview-api';
/** Shows the given messages assuming they are for the given file. */
export declare function MessagesList({ uri, messages }: {
    uri: DocumentUri;
    messages: InteractiveDiagnostic[];
}): JSX.Element;
/** Displays all messages for the specified file. Can be paused. */
export declare function AllMessages({ uri: uri0 }: {
    uri: DocumentUri;
}): JSX.Element;
/**
 * Provides a `LspDiagnosticsContext` which stores the latest version of the
 * diagnostics as sent by the publishDiagnostics notification.
 */
export declare function WithLspDiagnosticsContext({ children }: React.PropsWithChildren<{}>): JSX.Element;
export declare function lspDiagToInteractive(diag: Diagnostic): InteractiveDiagnostic;
export declare function useMessagesForFile(rs: RpcSessionAtPos, uri: DocumentUri, line?: number): InteractiveDiagnostic[];
