/// <reference types="react" />
import { DocumentPosition } from './util';
import { InteractiveDiagnostic, InteractiveGoal, InteractiveGoals, UserWidgets, RpcSessionAtPos } from '@leanprover/infoview-api';
declare type InfoStatus = 'loading' | 'updating' | 'error' | 'ready';
declare type InfoKind = 'cursor' | 'pin';
interface InfoPinnable {
    kind: InfoKind;
    /** Takes an argument for caching reasons, but should only ever (un)pin itself. */
    onPin: (pos: DocumentPosition) => void;
}
interface InfoStatusBarProps extends InfoPinnable {
    pos: DocumentPosition;
    status: InfoStatus;
    isPaused: boolean;
    copyGoalToComment?: () => void;
    setPaused: (p: boolean) => void;
    triggerUpdate: () => Promise<void>;
}
export declare function InfoStatusBar(props: InfoStatusBarProps): JSX.Element;
interface InfoDisplayProps {
    pos: DocumentPosition;
    status: InfoStatus;
    messages: InteractiveDiagnostic[];
    goals?: InteractiveGoals;
    termGoal?: InteractiveGoal;
    error?: string;
    userWidgets?: UserWidgets;
    rpcSess: RpcSessionAtPos;
    triggerUpdate: () => Promise<void>;
}
/** Displays goal state and messages. Can be paused. */
export declare function InfoDisplay(props0: InfoDisplayProps & InfoPinnable): JSX.Element;
/**
 * Note: in the cursor view, we have to keep the cursor position as part of the component state
 * to avoid flickering when the cursor moved. Otherwise, the component is re-initialised and the
 * goal states reset to `undefined` on cursor moves.
 */
export declare type InfoProps = InfoPinnable & {
    pos?: DocumentPosition;
};
/** Fetches info from the server and renders an {@link InfoDisplay}. */
export declare function Info(props: InfoProps): JSX.Element;
export {};
