import React from 'react';
import Content from '../content/funding_rounds';


class TopCategories extends React.Component {

    // https://stackoverflow.com/questions/3579486/sort-a-javascript-array-by-frequency-and-then-filter-repeats
     

    render() {

        const CategoryArray = Content.map(company => {
            return (
                company.category_name
            );
        });

        function sortByFrequency() {
            let frequency = {};
        
            CategoryArray.forEach(function(value) { 
                frequency[value] = 0; 
            });
        
            var uniques = CategoryArray.filter(function(value) {
                return ++frequency[value] == 1;
            });
        
            var sort = uniques.sort(function(a, b) {
                return frequency[b] - frequency[a];
            });

            var slice = sort.slice(0,3);

            return slice; 

        }

        // hint: The sort function returns an array. 

        console.log(sortByFrequency());

        return(
            <div>

                <h3>Top Categories</h3>
                {sortByFrequency()}

            </div>
        )
    }
}

export default TopCategories;