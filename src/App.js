import React, { Component } from 'react';
import Largest from './components/Largest';
import Newest from '../src/components/Newest';
import TopCategories from '../src/components/TopCategories';
import Tabs from '../src/components/Tabs';
import Toggle from '../src/components/Toggle';

class App extends Component {
    render() {
        return (
            <div>
                <Toggle />
                <Tabs>
                    <div label="Largest">
                        <Largest />
                    </div>
                    <div label="Newest">
                        <Newest />
                    </div>
                    <div label="Top Categories">
                        <TopCategories />
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default App;
