import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        const sorted = Content.sort((a, b) =>
           a.raised_amount_usd - b.raised_amount_usd
        )

        console.log(sorted);

        return(
            <div>

            </div>
        )
    }
}

export default FundingRounds;