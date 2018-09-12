import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        const listItems = Content.map((company) =>
            <li>{company.raised_amount_usd}</li>
        );

        return(
            <div>
                {listItems}
            </div>
        )
    }
}

export default FundingRounds;

// How to create a new array with map https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783
// https://stackoverflow.com/questions/12491101/javascript-create-array-from-for-loop 