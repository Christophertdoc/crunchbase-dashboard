import React from 'react';
import Content from '../content/funding_rounds';


class Largest extends React.Component {

    render() {

        const sortedByAmount = Content.sort((a, b) =>
           a.raised_amount_usd - b.raised_amount_usd
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

            </div>
        )
    }
}

export default Largest;