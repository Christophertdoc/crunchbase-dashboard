import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {

        const listItems = Content.map((company, index) =>
            company.raised_amount_usd
        );

        const sorted = listItems.sort(function(a, b){
            return <li>{a - b}</li>
        })

        var list = [2, 1, 5, 4];

        // temporary array holds objects with position and sort-value
        var mapped = list.map(function(el, i) {
            return { index: i, value: el };
        })
        
        // sorting the mapped array containing the reduced values
        mapped.sort(function(a, b) {
            if (a.value > b.value) {
            return 1;
            }
            if (a.value < b.value) {
            return -1;
            }
            return 0;
        });
        
        // container for the resulting order
        var result = mapped.map(function(el){
            return list[el.index];
        });

        return(
            <div>
                {result}
               
            </div>
        )
    }
}

export default FundingRounds;

// Sorting with map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map 