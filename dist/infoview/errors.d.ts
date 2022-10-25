import React from 'react';
/** Error boundary as described in https://reactjs.org/docs/error-boundaries.html */
export declare class ErrorBoundary extends React.Component<{}, {
    error: string | undefined;
}> {
    constructor(props: {});
    static getDerivedStateFromError(error: any): {
        error: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): React.ReactNode;
}
