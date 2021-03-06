import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from '../actions';

const INITIAL_STATE = {
    authenticated: false,
    content: '',
    error: '',
    message: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true,
                error: '',
                message: ''
            };
        case UNAUTH_USER:
            return {
                ...state,
                authenticated: false,
                error: action.payload
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
