import React, { Component } from 'react';
import {Col,Row, Form, Button} from 'react-bootstrap';

class FormComponent extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="Title" name="searchTitle" value={this.props.searchTitle} />
                        </Col>
                    </Row>
                    <Button variant="primary" onclick={this.props.handleFormSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Form;