/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosResponse } from 'axios';

import { RootState, Session } from '@types';
import { UPDATE_SESSION, SIGN_IN } from '@constants/action-types';
import { SESSION_SID } from '@constants/keys';

export const updateSession = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => (dispatch, getState) => {
    const state = getState();
    let sid;
    try {
        sid = JSON.parse(state.server.cookie[SESSION_SID])._sid;
    } catch (e) {}
    return axios
        .get<
            string,
            AxiosResponse<{
                session: Session;
            }>
        >('/api/session' + (sid ? `/${sid}` : ''))
        .then((res) => {
            return dispatch({
                type: UPDATE_SESSION,
                payload: res?.data?.session,
            });
        });
};

export const signIn = (
    formData: FormData
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) =>
    axios
        .post<
            string,
            AxiosResponse<{
                sid?: string;
            }>
        >('/api/sign-in', formData)
        .then((res) => {
            const { sid } = res?.data;
            dispatch({
                type: SIGN_IN,
                payload: {
                    sid,
                },
            });
            return sid;
        });
