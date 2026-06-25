class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
       const duplicates = new Set(nums);
        // Creates a set of the array nums which eliminates all the duplicate number 

        if(duplicates.size < nums.length){
            return true;
        }
        return false;
    }
}
