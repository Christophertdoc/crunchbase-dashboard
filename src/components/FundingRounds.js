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
                {users.map(user => {
                    return (
                        <li>{user.name}</li>
                    );
                })}
            </div>
        )
    }
}

export default FundingRounds;