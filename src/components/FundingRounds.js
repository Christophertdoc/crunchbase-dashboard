import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        // Convert to arrow function 
        var sorted = Content.sort(function (a, b) {
            return a.raised_amount_usd - b.raised_amount_usd;
        });

        // console.log(sorted);

        const arranged = Content.sort((a, b) =>
           a.raised_amount_usd - b.raised_amount_usd
        )

        // arr.sort((a, b) => a - b));
        console.log(arranged);

        return(
            <div>
            </div>
        )
    }
}

export default FundingRounds;