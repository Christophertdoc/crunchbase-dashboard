import React, { Component } from 'react';
import Largest from './components/Largest';
import Newest from '../src/components/Newest';
import TopCategories from '../src/components/TopCategories';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Largest />
                <Newest />
                <TopCategories />
            </div>
        );
    }
}

export default App;
