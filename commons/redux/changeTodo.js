import { ALL_TODOS, } from './constants';
import update from 'react-addons-update';
import _ from 'lodash'
import { change_todo } from './../../client/js/api'

export function updateTodos(data) {
    return {
        type: ALL_TODOS,
        payload: {
            data
        }
    }
}

export function changeTodo(id, done) {
    return dispatch => {
        change_todo(id, done).then(response => {
            dispatch(updateTodos(response))
        }).catch(error => { });
    }
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