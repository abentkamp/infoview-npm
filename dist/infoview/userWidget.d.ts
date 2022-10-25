/// <reference types="react" />
import { UserWidgetInstance } from '@leanprover/infoview-api';
import { DocumentPosition } from './util';
interface UserWidgetProps {
    pos: DocumentPosition;
    widget: UserWidgetInstance;
}
export declare function UserWidget({ pos, widget }: UserWidgetProps): JSX.Element;
export {};
