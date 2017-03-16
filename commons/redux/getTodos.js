import { ALL_TODOS, } from './constants';
import update from 'react-addons-update';
import _ from 'lodash'

export function updateTodos(data) {
    return {
        type: ALL_TODOS,
        payload: {
            data
        }
    }
}

export function getTodos() {

    return dispatch => {}
}

export function reducer(state, action) {

    switch (action.type) {
        case ALL_TODOS:
            return update(state, {
                todos: {
                    $set: action.payload.data
                }
            })

        default:
            return state;
    }
}