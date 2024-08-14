// src/actions.js
export const UPDATE_NAME = 'UPDATE_NAME';

// Action creator
export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    };
}