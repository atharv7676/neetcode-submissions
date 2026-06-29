class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {} // Create a obect to store the Result

        //Create a freq variable that given length of array to find kfrequent numbers by creating a new array that uses the given array length and stores [] array using arrow function  
        const freq = Array.from({length : nums.length + 1}, () => []);

        // Given Problem Array is lopped through every element inside it to check the present and if it is not present assign vale as 0 and then + 1, Or just add one to cureent adding frequency 
        for (let n of nums){
            count[n] = (count[n] || 0) + 1
        }

        // After getting the the frequency of every elem get the key value by using for-in loop
        for(const n in count){
            freq[count[n]].push(parseInt(n))
        }

        // creating a array to store the k frequqncy element by looping in reverse order

        const res =[];
        for(let i = freq.length - 1; i>0; i--){
            for(const n of freq[i]){
                res.push(n);
                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
