import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class Todo extends Component{
    render(){
    const todos = this.props.todos;

        return (
            todos.map((todo, i) => {
                return(
                    <tr key={i}>
                        <td>{todo.id}</td>
                        <td>{todo.item}</td>
                        <td><Checkbox></Checkbox></td>
                    </tr>   
                )
            })
        )
    }
}

export default Todo; 