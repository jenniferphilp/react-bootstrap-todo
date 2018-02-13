import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Table, Col } from 'react-bootstrap';
import RenderTodos from './Todo'
import Addtodo from './Addtodo'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state={
                todos: [
                    {item: "Buy Milk", completed: false, id: 1},
                    {item: "Learn React", completed: false, id: 2},
                    {item: "Get a Life", completed: false, id: 3}
                ],
                newTodoValue: ""
            }
        }

        handleSubmit = (e) => {
            e.preventDefault();
            let _todos = this.state.todos;

        //this doesn't work; we need to find the number of items current in the state and then add 1    
            let newId = _todos.length + 1;
        //@todo... find the todo with the highest id.. then add 1   
            let newTodo = {item: this.state.newTodoValue, completed: false, id: newId}
            _todos.push(newTodo);

            this.setState({
                todos: _todos,
                newTodoValue: ""
    
            })

        }

        handleTextChange = (event) => {
            this.setState({
                newTodoValue: event.target.value
            }) 
        }

        handleCompletion = (index) => {
            let _todos = this.state.todos;
            let todoToChange = _todos.find((todo) => { return todo.id === index })
            todoToChange.completed = !todoToChange.completed;
        
             this.setState({
                 todos: _todos
             })
        }

        handleDeleteTodo = (e) => {
            e.preventDefault();
            let _todos = this.state.todos
            let updatedTodos = _todos.filter(todo => !todo.completed)

            this.setState({
                todos: updatedTodos
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
            
            <RenderTodos 
                todos={this.state.todos}
                handleCompletion={this.handleCompletion}
            />
         
        </Table>
        
        <Addtodo 
            //if we write the function this way we have access to 'e' in the function definition
            handleSubmit={() => this.handleSubmit}
            handleDeleteTodo={() => this.handleDeleteTodo}
            handleTextChange={this.handleTextChange}
            value={this.state.newTodoValue}
            />
        </Col>
    );
  }
}

export default App;
