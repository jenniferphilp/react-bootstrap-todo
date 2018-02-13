import React, { Component } from 'react';
import { FormControl, Button, Col } from 'react-bootstrap';

class Addtodo extends Component{
    render(){
        return(
   
            
            <form onSubmit={this.props.handleSubmit()}>
                <Col sm={5}>
                    <FormControl
                    type="text"
                    value={this.props.value}
                    onChange={this.props.handleTextChange}
                    placeholder="Enter todo"
                    />
               </Col>
               <Col sm={7}>
                    <Col sm={4}>
                        <Button bsStyle="success" type="submit">Submit Todo</Button>
                    </Col>
                    <Col sm={8}>
                        <Button bsStyle="danger" type="submit" onClick={this.props.handleDeleteTodo()}>Delete Completed Todo</Button>
                    </Col>
                </Col>    
            </form>
           
        )
    }
}

export default Addtodo; 