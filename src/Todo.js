import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class RenderTodos extends Component {
    render(){
       const todos  = this.props.todos;
        return(<tbody>
                {todos.map((todo, i) => {
                    return(
                        <tr key={i}>
                            <td>{todo.id}</td>
                            <td>{todo.item}</td>
                            <td>
                                <Checkbox
                                    type="checkbox"
                                    checked={todo.completed}
                                    value={todo.completed}
                                    onChange={() => this.props.handleCompletion(todo.id)}>
                                </Checkbox></td>
                        </tr>)
                    }
                )}
                </tbody>)   
    }
}

export default RenderTodos; 