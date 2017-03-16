import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './../commons/redux/actions';
import classNames from 'classnames'
import _ from 'lodash'

import './styles.css'
import './bootstrap.css'


export class Todos extends React.Component {

    state = {
        todoTitle: '',
    }

    componentWillMount() {
        this.props.getTodos()
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.addTodo(this.state.todoTitle)
            this.setState({
                todoTitle: ''
            })
        }
    }

    onChange = (e) => {
        this.setState({
            todoTitle: e.target.value
        })
    }

    onChangeTodo = (id, done) => {
        this.props.changeTodo(id, done)
    }

    onRemoveTodo = (id) => {
        this.props.removeTodo(id)
    }


    render() {

        const left = this.props.todos.length > 0 ? _.filter(this.props.todos, { done: false }).length : 0

        return (
            <div id="todoapp">

                <h1>Todos</h1>

                <input id="new-todo" value={this.state.todoTitle} onChange={this.onChange} type="text" placeholder="What needs to be done?" onKeyPress={this.handleKeyPress} />


                <section id="main">

                    <ul id="todo-list">


                        {
                            this.props.todos.map((todo, i) => {

                                const todoClass = classNames({
                                    'done': todo.done || false
                                })

                                return (
                                    <li className={todoClass} key={i}>
                                        <div className="view">
                                            <input className="pull-left" type="checkbox" checked={todo.done} onChange={() => { this.onChangeTodo(todo._id, !todo.done) }} style={{ marginTop: 10, marginLeft: 20 }} />
                                            <label style={{ paddingLeft: 50 }}>{todo.title}</label>
                                            <a onClick={() => { this.onRemoveTodo(todo._id) }} className="destroy pull-right">X</a>
                                        </div>
                                    </li>
                                )
                            })
                        }

                    </ul>


                </section>

                {
                    this.props.todos.length > 0 ? 
                    <div>
                        <b>{left}</b>{'    '}{'item left'}
                    </div> 
                    : ''
                }

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
        addTodo: (todo) => {
            dispatch(actions.addTodo(todo))
        },
        changeTodo: (id, done) => {
            dispatch(actions.changeTodo(id, done))
        },
        removeTodo: (id) => {
            dispatch(actions.removeTodo(id))
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);