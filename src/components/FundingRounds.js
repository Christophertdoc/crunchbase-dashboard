import React from 'react';
import Content from '../content/funding_rounds';


class FundingRounds extends React.Component {


    render() {


        // RETURNS RAISED AMOUNT BUT NOT IN AN ARRAY OR OBJECT
        // const listItems = Content.map((company, index) =>
        //     company.raised_amount_usd
        // );

        // SORTS ELEMENTS BUT NOT BASED ON NUMBERS IN ASCENDING ORDER
        // const sorted = listItems.sort(function(a, b){
        //     return <li>{a - b}</li>
        // })



        // RETURNS A BROWSER ERROR SAYING SOMETHING ABOUT REACT NOT BEING 
        // ABLE TO RETURN OBJECT AS A CHILD ELEMENT
        // var list = [{"key": "1"},{"key": "3"},{"key": "2"},{"key": "5"}];
        // // temporary array holds objects with position and sort-value
        // const mapped = list.map((company, index) =>
        //     // return { index: i, value: el.key };
        //     return { company.key };
        // );
        // var mapped = list.map(function(el, i) {
        //     return { index: i, value: el.key };
        //   })
        // // sorting the mapped array containing the reduced values
        // mapped.sort(function(a, b) {
        //     if (a.value > b.value) {
        //     return 1;
        //     }
        //     if (a.value < b.value) {
        //     return -1;
        //     }
        //     return 0;
        // });
        // // container for the resulting order
        // var result = mapped.map(function(el){
        //     return list[el.value];
        // });



        // WORKS IN THAT IT SORTS NUMBERS ON ARRAY IN ASCENDING ORDER 
        // CAN'T SEEM TO GET THIS TO WORK ON THE JSON OBJECT AS SHOWN IN ANOTHER ATTEMPT
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
// Next steps: 
//     1. Look at showcase loops through JSON content. 
//     2. How to iterate over objects in React: https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries/40950656 
//          a. Try this with simple test object. 
//          b. Then try this with the JSON object. 
//          c. Then try adding sort to this loop.