class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        for(let s of strs){ // Fetching Single words for the object/array

            // Creating a Array of size 26 such that it all the index values are 0 and represent the alphabet
            const count = new Array(26).fill(0);

            //the characters inside the words  
            for(let c of s){
                // c.charCodeAt(0) is the iterated characters of each words with its ASCII value - A's ASCII value to get index numbers 99-97 = 2 ASCII value of c(99) and 2 represent the index value which is also c = 1
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            //convert Array into string
            const key = count.join('');

            // if i have created a key then ntg if no then create one 
            if(!res[key]){
                res[key] = [];
            }
            //pushes the words to a key in main object res
            res[key].push(s)
        }
        //return whole object of differnt anagram
        return Object.values(res)
    }
}
