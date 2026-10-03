class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniques = new Set(nums);
        if (nums.length === uniques.size)
        {
            return false
        }
        return true
    }
}
