import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';


class Home extends Component {
    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item as="a" header href="/">
                            test
                        </Menu.Item>
                        <Menu.Item id="managers-button" as="a" href="/managers">Managers</Menu.Item>
                    </Container>
                </Menu>
            </div>
        )
    }
}

export default Home