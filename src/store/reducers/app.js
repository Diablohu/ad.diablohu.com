import { UPDATE_SESSION, SIGN_IN } from '@constants/action-types';

const initialState = {
    session: undefined,
};

export default function (state = initialState, { type, payload } = {}) {
    switch (type) {
        case UPDATE_SESSION: {
            return {
                ...state,
                session: payload,
            };
        }

        case SIGN_IN: {
            return {
                ...state,
                session: {
                    ...(state.session || {}),
                    auth: true,
                    ...payload,
                },
            };
        }

        default:
            return state;
    }
}
