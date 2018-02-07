import React, { Component } from 'react';
import { FormControl, Button, Col } from 'react-bootstrap';

class Addtodo extends Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit()}>
                <Col sm={8}>
                <FormControl
                type="text"
                value={this.props.value}
                onChange={this.props.handleChange}
                placeholder="Enter todo"
                />
                </Col>
                <Button bsStyle="success" type="submit">Submit Todo</Button>
            </form>
        )
    }
}

export default Addtodo; 