import React from 'react';
import Content from '../content/funding_rounds';


class TopCategories extends React.Component {

    // Count Duplicates Within an Array of Objects: https://stackoverflow.com/questions/10541068/count-duplicates-within-an-array-of-objects
    // http://www.competa.com/blog/lets-find-duplicate-property-values-in-an-array-of-objects-in-javascript/ 
    // Get the element with the highest occurrence in an array: https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
    
   

    
    


    render() {

        const CategoryArray = Content.map(company => {
            return (
                company.category_name
            );
        });

        function frequent(categories) {
            return (
                categories[0]
            );
        }

        console.log(CategoryArray);
        console.log(frequent(CategoryArray));

        // 1. Put all categories into an array. 
        // 2. Get elements with the highest occurences in the array. 


        // const counts = {};
        // const compare = 0;
        // const mostFrequent;
        // const multiplyES6 = (x, y) => { return x * y };
    
           
        //    for(var i = 0, len = array.length; i < len; i++){
        //        var word = array[i];
               
        //        if(counts[word] === undefined){
        //            counts[word] = 1;
        //        }else{
        //            counts[word] = counts[word] + 1;
        //        }
        //        if(counts[word] > compare){
        //              compare = counts[word];
        //              mostFrequent = cats[i];
        //        }
        //     }
        //   return mostFrequent;

        


        return(
            <div>

                <h3>Top Categories</h3>

            </div>
        )
    }
}

export default TopCategories;