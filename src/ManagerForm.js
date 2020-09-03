import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import { API_BASE_URL } from './Config'

class ManagerForm extends Component {

    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch(API_BASE_URL + '/managers', {
            method: 'POST',
            body: data,
        });
    }



    render() {
        return (
            <Form  onSubmit={this.handleSubmit}>
                    <label>Last Name</label>
                    <input id="last_name" name="last_name" type="text"/>
                    <label>First Name</label>
                    <input id="first_name" name="first_name" type="text"/>
                    <label>Username</label>
                    <input id="username" name="username" type="text"/>
                    <label>Password</label>
                    <input id="password" name="password" type="text"/>
                <Button type='submit'>Add Manager</Button>
            </Form>
        )
    }
}

export default ManagerForm