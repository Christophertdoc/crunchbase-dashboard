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

        const firstThree = (categories) => {
            return (
                categories.slice(0,3)
            );
        }

        const array = ["apples", "oranges", "oranges", "oranges", "bananas", "bananas", "oranges"]

        function sortByFrequency(array) {
            let frequency = {};
        
            array.forEach(function(value) { frequency[value] = 0; });
        
            var uniques = array.filter(function(value) {
                return ++frequency[value] == 1;
            });
        
            return uniques.sort(function(a, b) {
                return frequency[b] - frequency[a];
            });
        }

        // console.log(CategoryArray);
        // console.log(firstThree(CategoryArray));
        console.log(sortByFrequency(CategoryArray).slice(0,3))

        return(
            <div>

                <h3>Top Categories</h3>

            </div>
        )
    }
}

export default TopCategories;