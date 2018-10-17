import React from 'react';
import Content from '../content/funding_rounds';


class TopCategories extends React.Component {

    // Count Duplicates Within an Array of Objects: https://stackoverflow.com/questions/10541068/count-duplicates-within-an-array-of-objects
    // http://www.competa.com/blog/lets-find-duplicate-property-values-in-an-array-of-objects-in-javascript/ 
    // Get the element with the highest occurrence in an array: https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array

    render() {

        // 1. Put all categories into an array. 
        // 2. Get elements with the highest occurences in the array. 

        const CategoryArray = Content.map(company => {
            return (
                company.category_name
            );
        })

        console.log(CategoryArray);


        return(
            <div>

                <h3>Top Categories</h3>

            </div>
        )
    }
}

export default TopCategories;