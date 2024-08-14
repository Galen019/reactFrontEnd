// src/reducers.js
import { combineReducers } from 'redux';
import { UPDATE_NAME } from '../actions/actions';

const initialState = {
    name: '',
};

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    userName: nameReducer,
});

export default rootReducer;