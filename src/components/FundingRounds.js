import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        const listItems = Content.map((company) =>
            <li>{company.company_name}: {company.raised_amount_usd}</li>
        );

        return(
            <div>
                {listItems}
            </div>
        )
    }
}

export default FundingRounds;