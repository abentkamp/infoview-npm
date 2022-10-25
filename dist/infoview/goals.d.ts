/// <reference types="react" />
import { InteractiveGoal, InteractiveGoals, InteractiveHypothesisBundle } from '@leanprover/infoview-api';
interface HypProps {
    hyp: InteractiveHypothesisBundle;
}
export declare function Hyp({ hyp: h }: HypProps): JSX.Element;
export declare function goalsToString(goals: InteractiveGoals): string;
export interface GoalFilterState {
    /** If true reverse the list of hypotheses, if false present the order received from LSP */
    reverse: boolean;
    /** If true show hypotheses that have isType=True, if false, hide hypotheses that have isType=True. */
    isType: boolean;
    /** If true show hypotheses that have isInstance=True, if false, hide hypotheses that have isInstance=True. */
    isInstance: boolean;
    /** If true show hypotheses that contain a dagger in the name, if false, hide hypotheses that contain a dagger in the name. */
    isHiddenAssumption: boolean;
}
interface GoalProps {
    goal: InteractiveGoal;
    filter: GoalFilterState;
    /** Where the goal appears in the goal list. Or none if not present. */
    index?: number;
}
export declare function Goal(props: GoalProps): JSX.Element;
interface GoalsProps {
    goals: InteractiveGoals;
    filter: GoalFilterState;
}
export declare function Goals({ goals, filter }: GoalsProps): JSX.Element;
export {};
