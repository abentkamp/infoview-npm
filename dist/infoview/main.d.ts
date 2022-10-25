import 'tachyons/css/tachyons.css';
import '@vscode/codicons/dist/codicon.ttf';
import '@vscode/codicons/dist/codicon.css';
import './index.css';
import { EditorApi, InfoviewApi } from '@leanprover/infoview-api';
/**
 * Renders the Lean infoview into the webpage.
 * @param editorApi
 * @param uiElement the HTML element (e.g. a `<div>`) to render into
 */
export declare function renderInfoview(editorApi: EditorApi, uiElement: HTMLElement): InfoviewApi;
