import React, { Component } from 'react';
import Largest from './components/Largest';
import Newest from '../src/components/Newest';
import TopCategories from '../src/components/TopCategories';
import Tabs from '../src/components/Tabs';

class App extends Component {
    render() {
        return (
            <div>
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
