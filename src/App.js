import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Table, Col } from 'react-bootstrap';
import Todo from './Todo'
import Addtodo from './Addtodo'

class App extends Component {
    constructor() {
        super()
    
        this.state={
                todos: [
                    {item: "Buy Milk", completed: false, id: 1},
                    {item: "Learn React", completd: false, id: 2}
                ],
                newTodoValue: ""
            }
        }

        handleSubmit = (event) => {
            event.preventDefault();
            let _todos = this.state.todos;
            let newId = Object.values(_todos).length + 1;
            let newTodo = {item: this.state.newTodoValue, completed: false, id: newId}

            _todos.push(newTodo);

            this.setState({
                todos: _todos,
                newTodoValue: ""
    
            })

        }

        handleChange = (event) => {
            this.setState({
                newTodoValue: event.target.value
            }) 
        }

  render() {

    return (
        <Col sm={6} smOffset={3}>
        <h1>ToDo List</h1>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Item Number</th>
                    <th>Item</th>
                    <th>Completed?</th>
                </tr>
            </thead>
            <tbody>
                <Todo todos={this.state.todos}/>
            </tbody>
        </Table>
        <Addtodo 
            handleSubmit={()=> this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.newTodoValue}/>
        </Col>
    );
  }
}

export default App;
