class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for(let i=0; i<=nums.length; i++){
            const diff = target - nums[i]
            // to get the required number that need to be added at nums[i] to get the targetsum value

            if(prevMap.has(diff)){
                return [prevMap.get(diff),i]
            }
            prevMap.set(nums[i], i)
        }
        return []
    }
}
