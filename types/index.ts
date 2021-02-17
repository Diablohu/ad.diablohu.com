/* eslint-disable @typescript-eslint/no-explicit-any */

import { LocationShape } from 'react-router/lib/PropTypes';

// 综合 =======================================================================

// React 相关 ==================================================================
export interface UIState {
    [metaKey: string]: any;
}

export interface RootState {
    localeId: string;
    routing: {
        locationBeforeTransitions: LocationShape;
    };
    server: {
        cookie: {
            [key: string]: string;
        };
    };
}

export interface RouteLocation {
    pathname: string;
    search: string;
    state: any;
    action: 'POP' | 'PUSH';
    key: any;
}
export interface RouteComponentProps {
    // location: LocationShape;
    location: RouteLocation;
    params: {
        [key: string]: any;
    };
}

// ============================================================================

export interface Session {
    reqCount: number;
    reqFirst: number;
    auth?: true;
}
