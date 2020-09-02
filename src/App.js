import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


import Home from './Home'
import Managers from './Managers'


class App extends Component {
    render() {
        return (
            <Router>
                 <Container text style={{ marginTop: '7em' }}>
                        <Route path="/" exact component={Home} />
                     <Route path="/managers" exact component={Managers} />

                 </Container>
            </Router>
        );
    }
}

export default App