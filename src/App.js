import React, { Component } from 'react';
import Largest from './components/Largest';
import Newest from '../src/components/Newest';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Largest />
                <Newest />
            </div>
        );
    }
}

export default App;
