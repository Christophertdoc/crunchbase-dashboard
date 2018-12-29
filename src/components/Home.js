import React, { Component } from 'react';
import Largest from './Largest';
import Newest from './Newest';
import TopCategories from './TopCategories';
import Tabs from './Tabs';
import Toggle from './Toggle';
import { Link } from 'react-router-dom';

class Home extends Component {
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
                <Link to="/contact">
                    <button>Contact</button> 
                </Link>
            </div>
        );
    }
}

export default Home;