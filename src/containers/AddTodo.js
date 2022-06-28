import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../store/actions";
import * as todosAPIs from "../api/todos";

class AddTodo extends Component {

    todoInput;
    state = {
        isInvalidTodo: false
    };

    handleSubmit(evt) {
        evt.preventDefault();
        const todoValue = this.todoInput.value;
        const isFirstCapitalLetter = /^[A-Z]*$/.test(todoValue.charAt(0));
        if (todoValue.length > 35 || !isFirstCapitalLetter) {
            this.setState({isInvalidTodo: true});
            return;
        }

        const todoItem = {
            title: todoValue,
            status: 'pending',
            due_on: new Date().toISOString()
        };

        todosAPIs.addTodoItem(todoItem, (err, response) => {
            if (err) return console.error(err);

            this.props.dispatch(addTodo(response));
            this.todoInput.value = '';
            this.setState({isInvalidTodo: false});
        });
    }

    render() {
        const inputClasses = `form-control ${this.state.isInvalidTodo ? 'is-invalid' : ''}`;

        return (
            <div>
                <form className='form-inline' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='form-row'>
                        <div className='col-md-12 mb-3'>
                            <label htmlFor='todoInput'>Add todo item</label>
                            <input type='text' className={inputClasses} id='todoInput'
                                   placeholder='Add todo item' required ref={node => this.todoInput = node}/>
                            <div className={this.state.isInvalidTodo ? 'invalid-feedback' : ''}>
                                Todo item must have at most 35 characters and must start with capital letter.
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mb-2'>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);
