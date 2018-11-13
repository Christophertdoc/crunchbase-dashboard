import React, { Component } from 'react';
import Largest from './components/Largest';
import Newest from '../src/components/Newest';
import TopCategories from '../src/components/TopCategories';
import Tabs from '../src/components/Tabs';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Largest />
                    <Newest />
                    <TopCategories />
                </div>
                <Tabs>
                    <div label="Gator">
                        See ya later, <em>Alligator</em>!
                    </div>
                    <div label="Croc">
                        After 'while, <em>Crocodile</em>!
                    </div>
                    <div label="Sarcosuchus">
                        Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default App;
