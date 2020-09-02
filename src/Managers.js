import React, { Component } from 'react';
import { Header, Message, Table } from 'semantic-ui-react';
import { API_BASE_URL } from './Config'
import ManagerForm from './ManagerForm';


class Managers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            managers: null
        };
        this.onAddition = this.onAddition.bind(this);
    }
    onAddition(manager) {
        this.setState({
            managers: [...this.state.managers, manager]
        })
    }
    componentDidMount() {
        this.getManagers();
    }

    async getManagers() {
        if (!this.state.managers) {
            try {
                const myHeaders = new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json"
                });
                const response = await fetch(API_BASE_URL + '/managers', {
                    headers: myHeaders,
                });
                const data = await response.json();
                this.setState({ managers: data});
            } catch (err) {
                console.error(err);
            }
        }
    }

    render() {
        return (
            <div>
                <Header as="h1">My Managers</Header>
                {this.state.managers &&
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.managers.map(
                            manager =>
                                <tr id={manager.id} key={manager.id}>
                                    <td>{manager.id}</td>
                                    <td>{manager.last_name}</td>
                                    <td>{manager.first_name}</td>
                                    <td><a href="#">Show</a></td>
                                </tr>
                        )}
                        </tbody>
                    </Table>
                    <ManagerForm onAddition={this.onAddition} />

                </div>
                }
            </div>
        );
    }
}

export default Managers

