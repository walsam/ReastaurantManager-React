import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

import { API_BASE_URL } from './Config'

class ManagerForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            last_name: '',
            first_name: '',
            username: '',
            password: '',
            errorMessage: '',
            error: false,
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            last_name: e.target.last_name,
            first_name: e.target.first_name,
            username: e.target.username,
            password: e.target.password,
        })
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            error: false,
            errorMessage: ''
        });
        const myHeaders = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json"
        });
        const response = await fetch(API_BASE_URL + '/managers', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "username": this.state.username,
                "last_name": this.state.last_name,
                "first_name":this.state.first_name,
                "password": this.state.password,
            })
        });
        const data = await response.json();

        if (data.errors) {
            this.setState({
                error: true,
                errorMessage: data.errors
            });
        } else {
            this.setState({
                last_name: '',
                first_name: '',
                username: '',
                password: '',
                error: false,
                errorMessage: ''
            });
            this.props.onAddition(data);
        }
    }

    render() {
        return (
            <Form error={this.state.error} onSubmit={this.onSubmit}>
                <Form.Field error={this.state.error}>
                    <label>Last Name</label>
                    <input placeholder='enter manager last name' value={this.state.last_name} onChange={this.handleChange}/>
                    <label>First Name</label>
                    <input placeholder='enter manager first name' value={this.state.first_name} onChange={this.handleChange}/>
                    <label>Username</label>
                    <input placeholder='enter manager username' value={this.state.username} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input placeholder='enter manager password' value={this.state.password} onChange={this.handleChange}/>
                    { this.state.error &&
                    <Message
                        error
                        header='Error creating manager'
                        content={this.state.errorMessage}
                    />
                    }
                </Form.Field>
                <Button type='submit' loading={this.state.isLoading}>Add Manager</Button>
            </Form>
        )
    }
}

export default ManagerForm