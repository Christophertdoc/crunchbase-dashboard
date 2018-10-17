import React from 'react';
import Content from '../content/funding_rounds';


class Newest extends React.Component {

    render() {

        const sortByDate = Content.sort((a,b) => 
            new Date(b.announced_on) - new Date(a.announced_on)
        )

        const newest = sortByDate.slice(0, 3); 

        return(
            <div>

                <h3>Newest</h3>
                {newest.map(company => {
                    return (
                        <li>{company.company_name}: {company.announced_on}</li>
                    );
                })}

            </div>
        )
    }
}

export default Newest;