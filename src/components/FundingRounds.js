import React from 'react';
import Content from '../content/funding_rounds';

let users = [
    {name: "John", id: 120, age: 22, gender: "male"},
    {name: "Beth", id: 443, age: 24, gender: "female"},
    {name: "Jane", id: 510, age: 19, gender: "female"}
]

class FundingRounds extends React.Component {



    render() {
        return(
            <div>
                {Content.map(company => {
                    return (
                        <li>{company.company_name}: {company.raised_amount_usd}</li>
                    );
                })}
            </div>
        )
    }
}

export default FundingRounds;