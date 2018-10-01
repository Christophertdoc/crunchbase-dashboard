import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        const sortedByAmount = Content.sort((a, b) =>
           a.raised_amount_usd - b.raised_amount_usd
        )

        const sortByDate = Content.sort((a,b) => 
            new Date(b.announced_on) - new Date(a.announced_on)
        )

        const topValues = sortedByAmount.slice(-3);

        return(
            <div>

                <h3>Largest Funding Rounds</h3>
                {topValues.map(company => {
                    if(company.raised_amount_usd) {
                        return (
                            <li>{company.company_name}: {company.raised_amount_usd}</li>
                        );
                    }
                })}

                <h3>Sorted By Date</h3>
                {sortByDate.map(company => {
                    return (
                        <li>{company.company_name}: {company.announced_on}</li>
                    );
                })}

            </div>
        )
    }
}

export default FundingRounds;