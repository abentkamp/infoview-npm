import * as React from 'react';
/** Returns `[node, isVisible]`. Attach `node` to the dom element you care about as `<div ref={node}>...</div>` and
 * `isVisible` will change depending on whether the node is visible in the viewport or not. */
export declare function useIsVisible(): [(element: HTMLElement) => void, boolean];
interface DetailsProps {
    initiallyOpen?: boolean;
    children: [JSX.Element, ...JSX.Element[]];
    setOpenRef?: React.MutableRefObject<React.Dispatch<React.SetStateAction<boolean>>>;
}
export declare function Details({ initiallyOpen, children: [summary, ...children], setOpenRef }: DetailsProps): JSX.Element;
export {};
