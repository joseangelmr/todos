import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './../commons/redux/actions';

export class Todos extends React.Component {
    render() {
        return (
            <div className="todos">
                <div>Todos</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        todos: state.global.todos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTodos: () => {
            dispatch(actions.getTodos())
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);