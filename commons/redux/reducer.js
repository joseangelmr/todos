import initialState from './initialState';

import { reducer as getTodosReducer } from './getTodos'
// import { reducer as addTodoReducer } from './addTodo'
// import { reducer as changeTodosReducer } from './changeTodo'
// import { reducer as removeTodosReducer } from './removeTodo'


const reducers = [
    getTodosReducer,
    // addTodoReducer,
    // changeTodosReducer,
    // removeTodosReducer,
];

export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}