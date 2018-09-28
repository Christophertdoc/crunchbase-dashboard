import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        const sorted = Content.sort((a, b) =>
           a.raised_amount_usd - b.raised_amount_usd
        )

        const topValues = sorted.slice(-3);

        return(
            <div>
                {topValues.map(company => {
                    if(company.raised_amount_usd) {
                        return (
                            <li>{company.company_name}: {company.raised_amount_usd}</li>
                        );
                    }
                })}
            </div>
        )
    }
}

export default FundingRounds;